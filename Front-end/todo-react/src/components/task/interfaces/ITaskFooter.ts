import React from 'react';

interface ITaskFooter {
  onStatusChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>
  ) => void;
}

export default ITaskFooter;
