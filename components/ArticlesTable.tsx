import IconDelete from "./icons/IconDelete";
import IconEdit from "./icons/IconEdit";
import { Button } from "./ui/Button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/Table";

const ArticlesTable = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[20%]">Date</TableHead>
                    <TableHead className="w-[20%]">Title</TableHead>
                    <TableHead className="w-[35%]">Content</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {[...Array(10)].map((i) => (
                    <TableRow key={i}>
                        <TableCell>06 Mar 2023</TableCell>
                        <TableCell>Lorem Ipsum</TableCell>
                        <TableCell>
                            <p className="line-clamp-1">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Iste enim nihil incidunt
                                labore voluptate id beatae recusandae velit
                                ratione rem dicta provident ad quod perspiciatis
                                nisi porro, nobis odit assumenda.
                            </p>
                        </TableCell>
                        <TableCell>
                            <div className="flex justify-center items-center gap-1.5">
                                <Button
                                    variant="orange"
                                    size="icon-sm"
                                    className="rounded-full"
                                >
                                    <IconEdit className="size-4" />
                                </Button>
                                <Button
                                    variant="red"
                                    size="icon-sm"
                                    className="rounded-full"
                                >
                                    <IconDelete className="size-4" />
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ArticlesTable;