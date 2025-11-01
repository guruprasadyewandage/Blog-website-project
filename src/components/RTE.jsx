import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';
import conf from '../conf/conf'

export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        apiKey={conf.tinyMceApiKey} 
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}



// import React from 'react';
// import { Editor } from '@tinymce/tinymce-react';
// import { Controller } from 'react-hook-form';
// import conf from '../conf/conf'; // Import your central config file

// export default function RTE({ name, control, label, defaultValue = "" }) {
//     return (
//         <div className='w-full'>
//             {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

//             <Controller
//                 name={name || "content"}
//                 control={control}
//                 initialValue={defaultValue}
//                 render={({ field: { onChange } }) => (
//                     <Editor
//                         // FIX 1: Use the API key from your secure configuration file
//                         apiKey={conf.tinyMceApiKey} 
                        
//                         initialValue={defaultValue}
//                         init={{
//                             // FIX 2: Removed initialValue from init object (was redundant)
//                             height: 500,
//                             menubar: true,
                            
//                             // FIX 3: Plugins are now listed as individual strings/items.
//                             // This prevents the 404 errors by asking the server for correct file paths.
//                             plugins: [
//                                 "advlist", "autolink", "lists", "link", "image", "charmap",
//                                 "preview", "anchor", "searchreplace", "visualblocks", "code",
//                                 "fullscreen", "insertdatetime", "media", "table", "help", "wordcount"
//                             ],
                            
//                             // FIX 4: Simplified and cleaned up the toolbar structure
//                             toolbar:
//                                 "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
//                             content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
//                         }}
//                         onEditorChange={onChange}
//                     />
//                 )}
//             />
//         </div>
//     );
// }