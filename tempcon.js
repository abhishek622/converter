
    const celsius=document.querySelector('#inputCelsius > input');
    const fahrenheit=document.querySelector('#inputFahrenheit > input');
    const kelvin=document.querySelector('#inputKelvin > input');

    function roundnum(num){
        return Math.round(num*10000)/10000;
    }

    function CTFK() {
        const c=parseFloat(celsius.value);
        const f=(c * (9/5))+32;
        const k=c + 273.15;
        fahrenheit.value = roundnum(f);
        kelvin.value = roundnum(k);
    }

    function FTCK() {
        const f=parseFloat(fahrenheit.value);
        const c=(f-32)/1.8;
        const k=((f-32)/1.8) + 273.15;
        celsius.value = roundnum(c);
        kelvin.value = roundnum(k);
    }

    function KTFC() {
        const k=parseFloat(kelvin.value);
        const f=((k+273.15)*1.8) + 32;
        const c=k -  273.15;
        celsius.value = roundnum(c);
        fahrenheit.value= roundnum(f);
    }

    function main(){
        celsius.addEventListener('input', CTFK );
        fahrenheit.addEventListener('input' , FTCK);
        kelvin.addEventListener('input' , KTFC);
    }
 
    main();
  