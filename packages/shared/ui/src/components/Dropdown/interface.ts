import React from 'react';

export interface IProps {
   children: {
      body: React.ReactNode;
      header: React.ReactNode;
   };
   direction: 'right' | 'left';
}
