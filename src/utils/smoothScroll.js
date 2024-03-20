function scroll(id) {
    const commentDiv = document.querySelector(`#${id}`)

    if (commentDiv) {
        commentDiv.scrollIntoView({ block: 'center', behavior: 'smooth' })

        commentDiv.classList.add('comment-animation');

        setTimeout(() => {
            commentDiv.classList.remove('comment-animation')
        }, 1000)
    }
}

export default scroll