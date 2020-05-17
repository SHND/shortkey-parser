document.addEventListener('keydown', (event) => {
    const keymap = `{
    which: ${event.which},
    keyCode: ${event.keyCode},
    code: "${event.code}",
    key: "${event.key}",
    location: ${event.location}
}`

    console.log(keymap)
})
