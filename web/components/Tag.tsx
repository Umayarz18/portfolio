import React from 'react';

type TagProps = {
    color: string;
    title: string;
};
export const Tag = ({ color, title }: TagProps) => {
    return (
        <div
            className=' opacity-90 rounded text-white mr-1 my-1 inline  
      w-max self-center shadow px-3 py-1 font-semibold text-xs'
            style={{ backgroundColor: color }}
        >
            #{title}
        </div>
    );
};
