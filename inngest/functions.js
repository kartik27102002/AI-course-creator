import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

export const createNewUser=inngest.createFunction(
    {
        id:'create-user'
    },
    { event: "user.create" },
    async({event,step})=>{
        const result=await step.run('check user and create new if not available',async()=>{
                         

            const result= await db.select().from(usersTable)
            .where(eq(usersTable.email,user?.primaryEmailAddress?.emailAddress));
             console.log("result"+result);
    
             if(result?.length==0)
             {
                const respUser=await db.insert(usersTable).values({
                    email:user?.primaryEmailAddress?.emailAddress,
                    name:"kartik Garg",
                }).returning({id:usersTable.id});
    
                console.log("respUser "+respUser);
             }
        })

        return "SUCCESS";
    }
    //to send email notifications


    

)