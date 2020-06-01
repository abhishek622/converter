
    const ft=document.querySelector('#inputFeet > input');
    const m=document.querySelector('#inputMeters > input');
    const inc=document.querySelector('#inputInches > input');
    const cm=document.querySelector('#inputcm > input');
    const yd=document.querySelector('#inputYards > input');
    const km=document.querySelector('#inputKilometers > input');
    const mi=document.querySelector('#inputMiles > input');

    function roundnum(num){
        return Math.round(num*10000)/10000;
    }

    function FTO() {
        const fttemp=parseFloat(ft.value);
        const mtemp = fttemp/3.2808;
        const inctemp = fttemp * 12;
        const cmtemp = fttemp/0.032808;
        const ydtemp = fttemp * 0.33333;
        const kmtemp = fttemp/3280.8;
        const mitemp = fttemp * 0.00018939;
        m.value = roundnum(mtemp);
        inc.value = roundnum(inctemp);
        cm.value = roundnum(cmtemp);
        yd.value = roundnum(ydtemp);
        km.value = roundnum(kmtemp);
        mi.value = roundnum(mitemp);
    }

    function MTO() {
        const mtemp=parseFloat(ft.value);
        const fttemp = mtemp * 3.2808; 
        const inctemp = mtemp * 39.370;
        const cmtemp = mtemp/0.01;
        const ydtemp = mtemp * 1.0936;
        const kmtemp = mtemp/1000;
        const mitemp = mtemp*0.00062137;
        ft.value = roundnum(fttemp);
        inc.value = roundnum(inctemp);
        cm.value = roundnum(cmtemp);
        yd.value = roundnum(ydtemp);
        km.value = roundnum(kmtemp);
        mi.value = roundnum(mitemp);
    }

    function ITO() {
        const inctemp=parseFloat(inc.value);
        const mtemp = inctemp/39.370;
        const fttemp = inctemp * 0.083333;
        const cmtemp = inctemp/0.39370;
        const ydtemp = inctemp * 0.027778;
        const kmtemp = inctemp/39370;
        const mitemp = inctemp * 0.000015783;
        m.value = roundnum(mtemp);
        ft.value = roundnum(fttemp);
        cm.value = roundnum(cmtemp);
        yd.value = roundnum(ydtemp);
        km.value = roundnum(kmtemp);
        mi.value = roundnum(mitemp);
    }

    function CTO() {
        const cmtemp=parseFloat(cm.value);
        const mtemp = cmtemp/100;
        const inctemp = cmtemp*0.39370;
        const fttemp =  cmtemp*0.032808;
        const ydtemp = cmtemp*0.010936;
        const kmtemp = cmtemp/100000;
        const mitemp = cmtemp*0.0000062137;
        m.value = roundnum(mtemp);
        inc.value = roundnum(inctemp);
        ft.value = roundnum(fttemp);
        yd.value = roundnum(ydtemp);
        km.value = roundnum(kmtemp);
        mi.value = roundnum(mitemp);
    }

    function YTO() {
        const ydtemp=parseFloat(yd.value);
        const mtemp = ydtemp/1.0936;
        const inctemp = ydtemp*36;
        const cmtemp = ydtemp/0.010936;
        const fttemp = ydtemp*3;
        const kmtemp = ydtemp/1093.6;
        const mitemp = ydtemp*0.00056818;
        m.value = roundnum(mtemp);
        inc.value = roundnum(inctemp);
        cm.value = roundnum(cmtemp);
        ft.value = roundnum(fttemp);
        km.value = roundnum(kmtemp);
        mi.value = roundnum(mitemp);
    }

    function KTO() {
        const kmtemp=parseFloat(km.value);
        const mtemp = kmtemp*1000;
        const inctemp = kmtemp*39370;
        const cmtemp = kmtemp*100000;
        const ydtemp = kmtemp*1093.6;
        const fttemp = kmtemp*3280.8;
        const mitemp = kmtemp*0.62137;
        m.value = roundnum(mtemp);
        inc.value = roundnum(inctemp);
        cm.value = roundnum(cmtemp);
        yd.value = roundnum(ydtemp);
        ft.value = roundnum(fttemp);
        mi.value = roundnum(mitemp);
    }

    function MiTO() {
        const mitemp=parseFloat(mi.value);
        const mtemp = mitemp/0.00062137;
        const inctemp = mitemp*63360;
        const cmtemp = mitemp/0.0000062137;
        const ydtemp = mitemp*1760;
        const kmtemp = mitemp/0.62137;
        const fttemp = mitemp*5280;
        m.value = roundnum(mtemp);
        inc.value = roundnum(inctemp);
        cm.value = roundnum(cmtemp);
        yd.value = roundnum(ydtemp);
        km.value = roundnum(kmtemp);
        ft.value = roundnum(fttemp);
    }

    function main(){
        ft.addEventListener('input', FTO );
        m.addEventListener('input', MTO );
        inc.addEventListener('input', ITO );
        cm.addEventListener('input', CTO );
        yd.addEventListener('input', YTO );
        km.addEventListener('input', KTO );
        mi.addEventListener('input', MiTO );
    }
 
    main();
  