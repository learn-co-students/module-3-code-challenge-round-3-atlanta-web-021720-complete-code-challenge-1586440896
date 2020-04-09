const theatreId = 355;
const baseUrl = `https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}`
const showCardsDiv = document.querySelector('div.ui.cards')
// const divUl = document.createElement('ul')
document.addEventListener('DOMContentLoaded', () => {
    fetchMovieShowings()
    
})


const fetchMovieShowings = () => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => iterateShowings(data))
}

const iterateShowings = (data) => {
    data.showings.forEach(show => {
        // console.log(show)
        renderShowings(show)
    })
}

const renderShowings = show => {
    // debugger
    const showDiv = document.createElement('div')
    const filmTitle = document.createElement('h4')
    const filmRuntime = document.createElement('p')
    const filmShowTime = document.createElement('h4')
    // const filmCapacity = document.createElement('p')
    const ticketsRemaining = document.createElement('p')
    const buyTicketBtn = document.createElement('button')




    filmTitle.innerText = show.film.title
    filmRuntime.innerText = `${show.film.runtime} minutes`
    filmShowTime.innerText = show.showtime
    // filmCapacity.innerText = show.film.capacity
    ticketsRemaining.innerText =  `${show.capacity}` - `${show.tickets_sold}`
    buyTicketBtn.innerText = 'Buy Ticket'
    // buyTicketBtn.addEventListener('click', () => {
    //     handleTickets(show)
    // })

    showDiv.id = show.id
    filmShowTime.appendChild(ticketsRemaining)
    showDiv.append(filmTitle, filmRuntime, filmShowTime, buyTicketBtn)
    showCardsDiv.appendChild(showDiv)

}

// const handleTickets = show => {
//     // ticketsRemaining--
//     if (show.ticketsRemaining <= 0) {
//         buyTicketBtn.style.display = 'none'
//     } else {
//         show.ticketsRemaining -= 1
//     }
// }
