
    const mph=document.querySelector('#inputMPH > input');
    const kph=document.querySelector('#inputKPH > input');
    const knots=document.querySelector('#inputKnots > input');
    const mach=document.querySelector('#inputMach > input');


    function roundnum(num){
        return Math.round(num*10000)/10000;
    }

    function MPHTO() {
        const mphtemp=parseFloat(mph.value);
        const kphtemp = mphtemp * 1.609344;
        const knotstemp = mphtemp/1.150779;
        const machtemp = mphtemp/761.207;
        kph.value = roundnum(kphtemp);
        knots.value = roundnum(knotstemp);
        mach.value = roundnum(machtemp);
    }

    function KPHTO() {
        const kphtemp=parseFloat(kph.value);
        const mphtemp = kphtemp/1.609344;
        const knotstemp = kphtemp/1.852;
        const machtemp = kphtemp/1225.044;
        mph.value = roundnum(mphtemp);
        knots.value = roundnum(knotstemp);
        mach.value = roundnum(machtemp);
    }

    function KTO() {
        const knotstemp=parseFloat(knots.value);
        const kphtemp = knotstemp * 1.852;
        const mphtemp = knotstemp * 1.150779 ;
        const machtemp = knotstemp/661.4708;
        kph.value = roundnum(kphtemp);
        mph.value = roundnum(mphtemp);
        mach.value = roundnum(machtemp);
    }

    function MTO() {
        const machtemp=parseFloat(mach.value);
        const kphtemp = machtemp * 1225.044;
        const knotstemp = machtemp * 661.4708;
        const mphtemp = machtemp * 761.207;
        kph.value = roundnum(kphtemp);
        knots.value = roundnum(knotstemp);
        mph.value = roundnum(mphtemp);
    }

    
    function main(){
        mph.addEventListener('input', MPHTO );
        kph.addEventListener('input' , KPHTO);
        knots.addEventListener('input' , KTO);
        mach.addEventListener('input' , MTO);
    }
 
    main();
  