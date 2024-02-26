import React from 'react';

const SecondsCounter = (props) => {
    let unidad = props.seconds;
    let diez = 0;
    let cien = 0;
    let mil = 0;
    let diezmil = 0;
    let mucho = 0;
    if(props.seconds > 9){
        diez =   Math.trunc(props.seconds / 10);
        unidad = props.seconds % 10;
        if (diez > 9){
            cien =  Math.trunc(diez / 10);
            diez = diez % 10;
            if(cien > 9){
                mil = Math.trunc(cien / 10);
                cien = cien %  10;
                if(mil > 9){
                    diezmil = Math.trunc(mil / 10);
                    mil = mil % 10;
                    if(diezmil > 9){
                        mucho = Math.trunc(diezmil / 10);
                        diezmil = diezmil % 10;
                    }
                }
            }
        }
    }
    return (
        <div className="app d-flex justify-content-center">
            <div className="icon contenedor"><i className="far fa-clock"></i></div>
            <div className="contador contenedor">{mucho}</div>
            <div className="contador contenedor">{diezmil}</div>
            <div className="contador contenedor">{mil}</div>
            <div className="contador contenedor">{cien}</div>
            <div className="contador contenedor">{diez}</div>
            <div className="contador contenedor">{unidad}</div>
        </div>
    );
};

export default SecondsCounter;