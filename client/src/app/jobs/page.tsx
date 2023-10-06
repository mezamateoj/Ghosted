import { Payment, columns } from './columns';
import { DataTable } from './data-table';
import data from './data';

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	// return [
	// 	{
	// 		id: '728ed52f',
	// 		amount: 100,
	// 		status: 'pending',
	// 		email: 'm@example.com',
	// 	},
	// 	// ...
	// ];
	return data;
}

export default async function DemoPage() {
	const data = await getData();

	return (
		<div className="container mx-auto py-10 w-5/6">
			<DataTable columns={columns} data={data} />
		</div>
	);
}