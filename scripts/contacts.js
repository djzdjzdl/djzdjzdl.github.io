function Contact_to_me_bro() {
    console.log('How did you find this? Well... Congrats!')
}

function Contact() {
    console.log('Contact me')
    //Contact1()
}

function Contact1() {
    console.log('\x45\x6d\x61\x69\x6c\x20\x3a\x20\x61\x32\x37\x32\x37\x31\x34\x40\x67\x6d\x61\x69\x6c\x2e\x63\x6f\x6d')
    //Contact2()
}

function Contact2() {
    var a = atob('Z2l0aHViIDogaHR0cHM6Ly9naXRodWIuY29tL2RqemRqemRs');
    console.log(a);
    //Contact3()
}

function Contact3() {
    var a = 71290312730912739012370912371092371092371209317230912371092371023712093127301273023 / 137818198371293871917283972938172938729381729387192381 / 6;
    a = parseInt(a);
    a /= 8;
    var c = [82,98,106,107,104,103,48,44,61,77,90,76,51,60,102,69,86,224,238,130,213,177,134,139,315,332,293,334,272,485]
    var d = []
    for(var i=0; i<30;i++) {
        d.push(String.fromCharCode((c[i]^a)) );
        a += i;
    }
    var e = d.join('');
    console.log(e);
    //Contact4()
}

function Contact4() {
    var a = '01001100 01100001 01100010 01110011 00100000 00111010 00100000 01101000 01110100 01110100 01110000 00111010 00101111 00101111 01100010 01100011 01100111 01101100 01100001 01100010 00101110 01101010 01100010 01101110 01110101 00101110 01100001 01100011 00101110 01101011 01110010 00101111'
    var b = a.split(' ')
    for(var i=0; i< b.length;i++) {
        b[i] = String.fromCharCode(parseInt(b[i],2))
    }
    var c = b.join('');
    console.log(c);
}