console.log("PetAura Loaded");

document.querySelectorAll("a").forEach(link=>{
  link.addEventListener("click",()=>{
    console.log("Navigation Click");
  });
});
