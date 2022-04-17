eyes = document.querySelectorAll('.eye');

function showPass() {
    event.target.innerHTML = `<svg class="eye__open" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="32" viewBox="0 0 32 32">
	 <path d="M16 7.333c-8.727 0-12 8.727-12 8.727s3.273 8.727 12 8.727c8.727 0 12-8.727 12-8.727s-3.273-8.727-12-8.727zM16 10.606c3.012 0 5.455 2.443 5.455 5.455s-2.443 5.455-5.455 5.455c-3.012 0-5.455-2.443-5.455-5.455s2.443-5.455 5.455-5.455zM16 12.788c-1.807 0-3.273 1.465-3.273 3.273s1.465 3.273 3.273 3.273c1.807 0 3.273-1.465 3.273-3.273s-1.465-3.273-3.273-3.273z"/>
	 </svg>`;
}
for (let i = 0; i < eyes.length; i++) {
    eyes[i]s.addEventListener('click', showPass, false)
}