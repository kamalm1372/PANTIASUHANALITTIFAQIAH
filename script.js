
document.querySelectorAll('.counter').forEach(counter=>{
 const target=+counter.dataset.target;
 let n=0;
 const step=()=>{
  n += Math.ceil(target/50);
  if(n>target)n=target;
  counter.textContent=n;
  if(n<target) requestAnimationFrame(step);
 };
 step();
});
