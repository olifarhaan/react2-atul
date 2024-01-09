import  { useRef } from 'react';
import Card from './Card';

function Foreground() {
    const ref = useRef(null);

    const data = [
        {
            desc: "lorem ipsum cocor xlssj cmcn dskakn ajajakak ",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "lorem ipsum cocor xlssj cmcn dskakn ajajakak ",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: false, tagTitle: "Upload", tagColor: "blue" },
        },
        {
            desc: "lorem ipsum cocor xlssj cmcn dskakn ajajakak ",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
        },
    ];

    return (
        <div ref={ref} className='w-full h-full bg-sky-800/200 fixed top-0 z-[3] flex gap-10 flex-wrap'>
            {data.map((item, index) => (
                <Card key={index} data={item} reference={ref} />
            ))}
        </div>
    );
}

export default Foreground;
