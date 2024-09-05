import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AddTransformationType =async  ({params:{type}}:SearchParamProps) => {
	const {userId} =auth() // getting clerk userId direct from clerk
	const transformation = transformationTypes[type]; //getiing tranformation data like title according to its type

	if(!userId) redirect('/sign-in')

	const user = await getUserById(userId); //fetching user of db
	console.log(userId);
	return (
		<>
			<Header title={transformation.title} subtitle={transformation.subtitle} />
			<section className="mt-10">
				<TransformationForm 
					action='Add' 
					userId={user._id} 
					type={transformation.type as TransformationTypeKey} 
					creditBalance={user.creditBalance}
				/>
			</section>
		</>
	)
		
	
};

export default AddTransformationType;
