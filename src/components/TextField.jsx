import React from 'react'

const TextField = ({label, inputProps, onChange, value}) => {
  return (
    
      <div className="flex flex-col my-4">
          <label className="mb-2 text-base text-gray-800">{label}</label>
          <input className="bg-gray-200 rounded-lg py-2 px-3 border-2 outline-none"
              {...inputProps}
              onChange={onChange}
              value={value}
          />
    </div>
  )
}

export default TextField