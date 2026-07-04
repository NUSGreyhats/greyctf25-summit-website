const cts = [
    '0d0771ddbf4fd98a273e65e55510e16818655249313c4064ae99c01340bfc718',
    'a737584c2d7071a7e5af330efd432319db0852e20abd66b56f3334a727d1398e',
    'd9eeb463fffb2cfa7a166c7091754d4a3ed4c951b6bf8e508bf824d67adb7f6a',
    '22f5aa095b9786ce28eec0a93b2fa0554ee3e102d976d377dae3a6891d20706a',
    'df5db7d40757e16d693c46fe97d0ee9d0c7bb521d608e1bdab0cfccd0ea9f8fd',
    'a59759631ab7d118c6c6018fff9737ab96b98d3ce5d3acb78433f536257ead95',
    '0d1d9982c6ac8276c5896ceac771a8f8cc999657de6cdbe95cca2b084740c24d',
    'cbc4f3885d4106f1a396488784da30cdc66fb2cf2c57a9d9bfbf874865d00e9e',
    'c06fe7fb5d7e97917d67c47b1673012353d846e63a68392d177fe609e0c5dd43',
    '3307bbaabf807b3b510d71b8d4b21cb40395f15e98066455bd54f16d58bc60dd',
    'dc3091ea402c2c72fe1b0cdc2b2ca40f053dbf58731b4641ec0e71a532ae91dd'
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
    "FREE"
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
    '3;1;68593c8897f92e6f;3e7b45e296943442;a193d669527459d5',
    '3;3;5855c10d4f6423d7;f1343b9a6391b75d;4f352a3d91e8b835'
]
