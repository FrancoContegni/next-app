import { FC, PropsWithChildren } from 'react';

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(200,0,3,0.5)',
        padding: '10px',
        borderRadius: '5px',
    }}>

<h3>Dark-Layouts</h3>

<div>
{ children }


</div>

    </div>
  );
};


