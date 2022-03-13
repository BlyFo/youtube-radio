export function LoadInf() {

    let inf = localStorage.getItem("Songs")
    let data: any;
    if (inf !== null) {
        data = JSON.parse(inf);
    } else {
        let obj = {
            stations: [
                { name: 'lofi hip study', url: 'https://www.youtube.com/embed/5qap5aO4i9A?rel=0' },
                { name: 'Relaxing Jazz Piano Radio', url: 'https://www.youtube.com/embed/Dx5qFachd3A' },
                { name: 'Nightcore Rock Radio', url: 'https://www.youtube.com/embed/YZQkBYBaEVQ' },
                { name: 'lofi hip sleep', url: 'https://www.youtube.com/embed/DWcJFNfaw9c' },
                { name: 'The Good Life Radio', url: 'https://www.youtube.com/embed/36YnV9STBqc' },
                { name: 'Chillhop Radio', url: 'https://www.youtube.com/embed/5yx6BWlEVcY' },
            ]
        };
        data = obj;
    }
    return { data }
}