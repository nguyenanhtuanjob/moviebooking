import React from 'react'

export default function MyInputField({label,...props}) {
    const [field, meta] = useField(props);
   return (
     <>
       <label htmlFor={props.id || props.name}>{label}</label>
       <input className="text-input" {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </>
   );
}
