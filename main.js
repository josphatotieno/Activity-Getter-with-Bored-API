const typeOfActivity = document.querySelector('select');
const btn = document.querySelector('.btn');
const activityModal = document.querySelector('#activity-modal');
const activityWrapper = document.querySelector('#activity-wrapper');

btn.addEventListener('click', getActivity);

async function getActivity(e) {
    e.preventDefault();

    const type = typeOfActivity.options[typeOfActivity.selectedIndex].text;

    if(type !== '') {
        const response = await fetch(`http://www.boredapi.com/api/activity?type=${type.toLowerCase()}`);

        const data = await response.json();

         displayActivity(data.activity);

    } else {
        alert('Please select type of activity')
    }

    
}

function displayActivity(activity) {
    activityModal.style.display = 'flex';

    activityWrapper.innerHTML = `
        <p>There you go! <i class="fa fa-rocket" aria-hidden="true"></i> It's time to <span class='activity'>${activity}<span>.</p>
    `
}

window.addEventListener('click', e => e.target == activityModal ? activityModal.style.display = 'none' : false)
