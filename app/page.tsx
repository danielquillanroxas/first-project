"use client";
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
export default function Home() {
    const [inputVal, setInputVal] = useState("");
    const { push }  = useRouter();
    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      push(`/prediction/${inputVal}`);
    }
    return (
      <div className="flex min-h-screen flex-col items-center p-24" style={{ display: 'flex', justifyContent: 'center'}}>
        <div>
          <h1> Enter Your Name </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <InputText
            className='text-black flex'
            style={{ display: 'flex', justifyContent: 'center'}}
            type="text"
            placeholder="Type your name..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            />
          <Button type="submit" label="Predict Data" className='outlined items-center'/>
        </form>
      </div>
    )
}
