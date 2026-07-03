const cts = [
    '0d0771baaa58c5882f387de50955a76c717e69361e163978b5f3b9653c94e118',
    'a737582b38676da5eda92b0ea106651db213699d25971fa974594dd15bfa1f8e',
    'd9eeb404eaec30f872107470cd300b4e57cff22e9995f74c90925da006f0596a',
    '22f5aa6e4e809acc20e8d8a9676ae65127f8da7df65caa6bc189dfff610b566a',
    'df5db7b31240fd6f613a5efecb95a89965608e5ef92298a1b06685bb7282defd',
    'a59759040fa0cd1acec0198fa3d271afffa2b643caf9d5ab9f598c4059558b95',
    '0d1d99e5d3bb9e74cd8f74ea9b34eefca582ad28f146a2f547a0527e3b6be44d',
    'cbc4f3ef48561af3ab905087d89f76c9af7489b0037dd0c5a4d5fe3e19fb289e',
    'c06fe79c48698b937561dc7b4a3647273ac37d99154240310c159f7f9ceefb43',
    '3307bbcdaa976739590b69b888f75ab06a8eca21b72c1d49a63e881b249746dd',
    'bb4293e15e262279e646148c2d12b01e361584275c313f5df7670c8719dfe2dd'
]


const names = [
    "DSO",
    "FREE",
    "Espressif",
    "CSIT",
    "ISD",
    "Hacked the Gachapon",
    "Cleared Vibecat 404 Once",
    "FREE",
    "HTX",
    "Played 1v1 CTF",
    "Picked a Lock",
    "Div0",
    "DSTA",
    "FREE",
    "DIS",
    "CSA"
]


const items = {
    "FREE": "Free square \u2014 this one's on us :)",
    "Hacked the Gachapon": "Hack the Gachapon machine at the Gachapon NFC Hacking activity (TR10) to earn this stamp!",
    "Cleared Vibecat 404 Once": "Clear Vibecat 404 once at the game hacking activity (TR11) to earn this stamp!",
    "Played 1v1 CTF": "Play a round of the 1v1 CTF contest (SR3) to earn this stamp!",
    "Picked a Lock": "Successfully pick a lock at the Locksport booth to earn this stamp!",
    "Div0": "Follow <a href='https://www.instagram.com/div0_sg/'>@div0_sg</a> on instagram and show it at the Div0 Booth",
};

for(const name of names) {
    if (!items[name]) {
        items[name] = `Engage with the ${name} booth to get their QR code!`
    }
}


// free squares, automatically stamped on load
const freeCells = [
    '0;1;20ae13d5c7a073af;64ddea82709d7c5f;68a67f52c3445ffa',
    '1;3;40c4eeeda4e875ef;8d41815eee87e5aa;295e2b350675022a',
    '3;1;68593c8897f92e6f;3e7b45e296943442;a193d669527459d5'
]
