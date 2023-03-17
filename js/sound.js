const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classLit.add('btn')
    btn.innerText = sound

    btn.addEventListener('click', () => {
        document.getElemetById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})