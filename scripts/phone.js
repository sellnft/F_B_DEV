const phoneForm = document.getElementById('phone'); 
phoneForm?.addEventListener('input', () => { 
const digits = phoneForm.value.replace(/\D/g,'').slice(0,11);
const d = digits.replace(/^8/, '7');                      

const parts = []; 
if (d.length > 0) parts.push('+7'); 
if (d.length > 1) parts.push(' (' + d.slice(1,4)); 
if (d.length >= 4) parts[parts.length - 1] += ')'; 
if (d.length >= 5) parts.push(' ' + d.slice(4,7)); 
if (d.length >= 8) parts.push('-' + d.slice(7,9)); 
if (d.length >= 10) parts.push('-' + d.slice(9,11)); 
phoneForm.value = parts.join(''); 
}); 
