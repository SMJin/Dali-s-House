import React from "react"

const ProgressBar = (props) => {
    const {bgcolor, completed} = props;

    const containerStyles = {
        height: 3,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 3,
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: "#ff7373",
        borderRadius: 'inherit',
        textAlign: 'right',
        color:"FFFFF"

      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }

    return (
        <div style={containerStyles}>
        <div style={fillerStyles}>
            </div>
        </div>
    );
};

export default ProgressBar;