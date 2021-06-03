import React, { useState } from 'react'

const EmailSubscribe = () => {
    const [ sending , setSending ] = useState<boolean>(false);
    const [ error , setError ] = useState<boolean>(false)
    const [ sucess , setSucess ] = useState<boolean>(false)
    const [ email , setEmail ] = useState<string>('');

    const handleSubmit = (e:any) => {
        e.preventDefault();

        setSending(true);

        setTimeout(() => {
            success();
        } , 5000) //Provisional

        const reset = ():void => {
            setTimeout(() => {
                setSending(false);
                setError(false);
                setSucess(false);
            },2000)
        }

        const success = ():void => {
            setSending(false);
            setError(false);
            setSucess(true);

            reset();
        }
        const error = ():void => {
            setSending(false);
            setError(true);
            setSucess(false);
        }
        
        
    }
    const handleChange = (e:any) => {
        setEmail(e.target.value)
    }
    return (
        <form className="home-subscribe-form" onSubmit={handleSubmit}>
            <label htmlFor="email">
                <input 
                    type="email" 
                    className={
                        `home-subscribe-form__email ${
                        (sucess && ' text-green-800 border-green-800') || 
                        (error && ' text-red-900 border-red-900') || 
                        (sending && 'text-oscure border-oscure') || 
                        'text-oscure border-primary'}`
                    } 
                    name="email" 
                    id="email" 
                    disabled={sucess || error || sending}
                    value={error && 'A error ocurred' || email}
                    placeholder="Your email address" 
                    onInput={handleChange}
                />
            </label>
            <input 
                type="submit" 
                id="submit-subscribe"
                disabled={sucess || error || sending}
                className={
                    (sucess || error || sending) ? 'home-subscribe-form__button bg-oscure':
                    'home-subscribe-form__button hover-primary bg-primary'
                }
                value={sending? 'Sending...' : (sucess || error ) ? '¡Send!' : 'Subscribe'}
            />
        </form>
    )
}

export default EmailSubscribe
