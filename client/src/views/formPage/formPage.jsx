import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import style from './formPage.module.css';
import AddCountryToForm from './addCountry/addCountryToForm.jsx';
import { postActivity } from '../../redux/actions';
import { addCountryList } from '../../redux/actions';

function formPage() {

    const dispatch = useDispatch();
    const addCountry = useSelector(state => state.addCountry);

    const [form, setForm] = useState({
        name: '',
        difficulty: 0,
        duration: undefined,
        season: '',
        countries: [],
    });

    const handleChange = (event) => {
        const property = event.target.name;
        let value = event.target.value;
        if (property === 'difficulty' || property === 'duration') {
            value = parseInt(value, 10); // Convertir a entero en base 10
          }
        setForm({...form, [property]:value});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (!form.name || !form.duration || !form.difficulty || !form.season || !form.duration) return alert('Missing data!');
        if (!addCountry) return alert('You must add this activity to al teast one country')
        if (form.duration > 5 || form.duration < 1) return alert('Invalid duration');
        if (form.duration !== Math.floor(form.duration)) return alert('Duration must be expressed in integer numbers');
        
        
        try {
            dispatch(postActivity(form));
            alert('Activity succesfully created!');
        } catch (error) {
            alert(error.errorMessage);
        }
        
        
    };
    // console.log(form)
    // console.log(addCountry)
    
    // console.log(addCountry)


    
    useEffect(() => {
        setForm({...form, countries: addCountry});
    }, [addCountry]);

    return (
        <div>
            <h1>Create a new activity</h1>
            
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input value={form.name} name='name' onChange={handleChange} />
                </div>
                <div>
                    <label>Duration</label>
                    <input value={form.duration} name='duration' onChange={handleChange} />
                </div>
                <div>
                    <label>Difficulty</label>
                    <select value={form.difficulty} onChange={handleChange} name='difficulty'>
                        <option disabled value={0}>Select difficulty</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div>
                    <label>Season</label>
                    <select value={form.season} onChange={handleChange} name='season'>
                        <option disabled value=''>Select season</option>
                        <option value='Summer'>Summer</option>
                        <option value='Winter'>Winter</option>
                        <option value='Autumn'>Autumn</option>
                        <option value='Spring'>Spring</option>
                    </select>
                </div>
                <div>
                    <label>Add your activity to one or more countries</label>
                    <AddCountryToForm />
                    {addCountry.length === 0 ? (
                        <h2>No countries yet</h2>
                    ) : (
                        addCountry.map((country, index) => (<h2 key={index}>{country}</h2>))
                    )}
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default formPage;