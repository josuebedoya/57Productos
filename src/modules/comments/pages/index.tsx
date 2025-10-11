// @ts-ignore
import {useComment} from '@/modules/comments/context/comments.jsx'
import {useState, useEffect} from "react";
import TextArea from '@/components/input/fields/textarea/index.tsx'
import Select from "@/components/input/fields/select/index.js";

const Comments = () => {

    const {comments} = useComment();

    const [content, setContent] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() => {
      if (comments && comments.length > 0) {
        console.info(comments)
        setContent(comments)
      }
    }, [comments]);

    useEffect(() => {
        if (content && content.length > 0) {
          setOptions((): any => {
              return (
                content.map((op: any) => (
                  {label: op.name || '', value: op.id}
                ))
              )
            }
          )
        }
      }, [content]
    );

    return (
      <div className=' container  py-[200px] bg-gray-300 mx-auto px-20'>
        <div className='flex justify-center items-center'>
          <Select
            name='comments'
            onChange={() => false}
            options={options}
          />
          <TextArea
            name='Hola'
            onChange={() => false}
            placeholder='Placehoder'
          />
        </div>
        {
          content && content.map((item: any) => (
            <div className="card my-5 border border-red-500 p-10">
              {item.comment}
            </div>
          ))
        }
      </div>
    );
  }
;

export {Comments};