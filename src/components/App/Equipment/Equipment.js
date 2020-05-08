import React, {useEffect, useState} from 'react';
import "./Equipment.scss";
import skiing from "./skiing (1).svg";


export default function Equipment() {
    const [length, setLength] = useState(150);
    const [weight, setWeight] = useState(50);
    const [skills, setSkills] = useState(0);
    const [result, setResult] = useState('');

    useEffect(() => {
        if (weight <= 21 && skills == 0) {
            setResult('1.25');
        } else if ((weight > 21 && weight <= 25 && skills == 0) || (weight >= 18 && weight <= 21 && skills == 1)) {
            setResult('1.75');
        } else if ((weight >= 26 && weight <= 30 && skills == 0) || (weight >= 22 && weight <= 25 && skills == 1) || (weight >= 18 && weight <= 21 && skills == 2)) {
            setResult('2.25');
        } else if ((weight >= 31 && weight <= 35 && skills == 0) || (weight >= 26 && weight <= 30 && skills == 1) || (weight >= 22 && weight <= 25 && skills == 2)) {
            setResult('2.75');
        } else if ((weight >= 36 && weight <= 41 && skills == 0) || (weight >= 31 && weight <= 35 && skills == 1) || (weight >= 26 && weight <= 30 && skills == 2)) {
            setResult('3');
        } else if (weight >= 42 && weight <= 48 && skills == 0) {
            setResult('3.25');
        } else if ((weight >= 49 && weight <= 57 && skills == 0) || (weight >= 36 && weight <= 41 && skills == 1)) {
            setResult('3.5');
        } else if ((weight >= 42 && weight <= 48 && skills == 1) || (weight >= 31 && weight <= 35 && skills == 2)) {
            setResult('4');
        } else if ((weight >= 58 && weight <= 66 && skills == 0) || (weight >= 49 && weight <= 57 && skills == 1) || (weight >= 36 && weight <= 41 && skills == 2)) {
            setResult('4.5');
        } else if (weight >= 42 && weight <= 48 && skills == 2) {
            setResult('5');
        } else if ((weight >= 67 && skills == 0) || (weight >= 58 && weight <= 66 && skills == 1) || (weight >= 49 && weight <= 57 && skills == 2)) {
            setResult('5.5');
        } else if ((weight >= 67 && skills == 1) || (weight >= 58 && weight <= 66 && skills == 2)) {
            setResult('6.5');
        } else if (weight >= 67 && skills == 2) {
            setResult('8');
        } else {
            setResult('coś poszło nie tak..;p')
        }
    }, [weight, skills]);
    return (
        <div className='equipment-page'>
            <p className="equipment-p">Dopasuj sprzęt!</p>
            <div className='form'>
                <form>
                    <span>Podaj swój wzrost w centymetrach:</span>
                    <input type="number" value={length}
                           onChange={(e) => setLength(e.target.value < 0 ? 0 : e.target.value)}/>
                    <span>Podaj swoją wagę w kilogramach:</span>
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)}/>
                    <span>Jaki jest poziom Twoich umiejętności narciarskich?</span>
                    <select onChange={e => setSkills(e.target.value)}>
                        <option value={0}>Początkujący</option>
                        <option value={1}>Średniozaawansowany</option>
                        <option value={2}>Zaawansowany</option>
                    </select>
                    <br/>
                    <br/>
                    {length < 50 ? <span>Przykro mi, jesteś za mały :(</span> : length > 220 ?
                        <span>Grasz w kosza?</span> : <span>Przbliżona długość nart dla Ciebie to <span
                            className="span">{length - 10} cm</span> </span>}
                    {weight < 17 ? <span>Musisz jeszcze trochę poczekać</span> : weight > 180 ?
                        <span>Ups coś poszło nie tak! :(</span> :
                        <span>Przybliżona wartość na jaką powinno się ustawić wiązania to <span
                            className="span">{result}</span></span>}
                </form>
                <img className="svg" src={skiing} alt=""/>
            </div>

        </div>
    );
}


