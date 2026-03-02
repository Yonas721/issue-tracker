// import { Controller,useForm } from "react-hook-form";


// const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
//   ssr: false,
// });
// import "easymde/dist/easymde.min.css";
// import { Button, TextField } from "@radix-ui/themes";
// import ErrorMessage from "@/app/components/ErrorMessage";
// import { useState } from "react";
// import Spinner from "@/app/components/Spinner";
// import { useRouter } from "next/navigation";
// import axios from "axios";

// export default function EditIsse(){
    
// const [isSubmitting, setIsSubmmiting] = useState(false);
    
// const router=useRouter();

//     const{register, handleSubmit,formState: {errors}}=useForm();

//     const onSubmit = handleSubmit(async (data) => {
//       await axios.put('/api/put',data);
//       router.push(``)
//     });
//     return(
//        <form className="space-y-3 max-w-xl" onSubmit={onSubmit}>
//                <TextField.Root placeholder="Title" {...register("title")} value={}/>
//                {errors.title && <ErrorMessage message={errors.title.message} />}
       
//                <Controller
//                  name="description"
//                  control={control}
//                  render={({ field }) => (
//                    <SimpleMDE placeholder="Description" {...field} />
//                  )}
//                />
       
//                {errors.description && (
//                  <ErrorMessage message={errors.description.message} />
//                )}
       
//                <Button type="submit" disabled={isSubmitting}>
//                  Save Changes{isSubmitting && <Spinner />}
//                </Button>
//              </form>
//     );
// }