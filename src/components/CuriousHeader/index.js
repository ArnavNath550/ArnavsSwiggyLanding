import React from 'react'
import TextTransition, { presets } from 'react-text-transition';
import './curiousHeader.css'

const CuriousHeader = () => {
  const TEXTS = ['Game night?', 'Cooking gone wrong?', 'Late night at office?', 'Unexpected guests', 'Hungry?'];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="general-space-around">
        <div className="curious-header-text">
          <TextTransition>{TEXTS[index % TEXTS.length]}</TextTransition>
        </div>
        <div className="curious-header-subtext">Order food from favourite restaurants near you.</div>
    </div>  
  )
}

export default CuriousHeader