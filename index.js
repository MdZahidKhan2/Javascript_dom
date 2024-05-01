
// ================= getElementByID =========================
let id1 = document.getElementById('ID1');
id1.innerHTML ='i am Moshahid';

// ================= getElementsByClassName =========================
let clssName1 = document.getElementsByClassName('className1')[0];
clssName1.innerHTML = 'Change Class Name from JS';

// ================= getElementsByName =========================
let className1 = document.getElementsByName('className1')[0];
className1.innerHTML = 'Change Name 1 from JS';

// ================= getElementsByTagName =========================
let h3 = document.getElementsByTagName('h3')[1];
h3.innerHTML = 'Change h3 - Document from JS';

// ================= querySelector =========================
let h4 = document.querySelector('h3');
h4.innerHTML = 'Change from Query Selector'; // Only Fist tag/Element can't change Other Element.

// ================= querySelectorAll =========================
let h5 = document.querySelectorAll('h3')[3];
h5.innerHTML = 'Change From Query Selector All';
