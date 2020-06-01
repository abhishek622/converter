
    const p=document.querySelector('#inputPounds > input');
    const kg=document.querySelector('#inputKilograms > input');
    const o=document.querySelector('#inputOunces > input');
    const g=document.querySelector('#inputGrams > input');
    const s=document.querySelector('#inputStones > input');

    function roundnum(num){
        return Math.round(num*10000)/10000;
    }

    function PTO() {
        const ptemp=parseFloat(p.value);
        const kgtemp= (ptemp/2.2046);
        const otemp= ptemp * 16;
        const gtemp= ptemp/0.0022046;
        const stemp= ptemp * 0.071429;
        kg.value = roundnum(kgtemp);
        o.value = roundnum(otemp);
        g.value = roundnum(gtemp);
        s.value = roundnum(stemp);
    }

    function KTO() {
        const kgtemp=parseFloat(kg.value);
        const ptemp= kgtemp * 2.2046;
        const otemp= kgtemp * 35.274; 
        const gtemp= kgtemp * 1000;
        const stemp= kgtemp * 0.1574;
        p.value = roundnum(ptemp);
        o.value = roundnum(otemp);
        g.value = roundnum(gtemp);
        s.value = roundnum(stemp);
    }

    function OTO() {
        const otemp=parseFloat(o.value);
        const kgtemp= otemp/35.274;
        const ptemp= otemp * 0.0625;
        const gtemp= otemp/0.035274;
        const stemp= otemp * 0.0044643; 
        kg.value = roundnum(kgtemp);
        p.value = roundnum(ptemp);
        g.value = roundnum(gtemp);
        s.value = roundnum(stemp);
    }

    function GTO() {
        const gtemp=parseFloat(g.value);
        const kgtemp= gtemp/1000;
        const otemp= gtemp * 0.035274;
        const ptemp= gtemp * 0.0022046;
        const stemp= gtemp * 0.00015747;
        p.value = roundnum(ptemp);
        kg.value = roundnum(kgtemp);
        o.value = roundnum(otemp);
        s.value = roundnum(stemp);
    }

    function STO() {
        const stemp=parseFloat(s.value);
        const kgtemp= stemp/0.15747;
        const otemp= stemp * 224;
        const gtemp= stemp/0.00015747;
        const ptemp= stemp * 14;
        p.value = roundnum(ptemp);
        kg.value = roundnum(kgtemp);
        o.value = roundnum(otemp);
        g.value = roundnum(gtemp);
    }

    function main(){
        p.addEventListener('input', PTO);
        kg.addEventListener('input' , KTO);
        o.addEventListener('input' , OTO);
        g.addEventListener('input' , GTO);
        s.addEventListener('input' , STO);
    }
 
    main();
  