"use client";
import Link from "next/link";
import Button from "@mui/material/Button";
import AssignmentIcon from "@mui/icons-material/Assignment"; //detail products
import AddCircleIcon from "@mui/icons-material/AddCircle"; //create icon
import DesignServicesIcon from "@mui/icons-material/DesignServices"; //edit icon
import DeleteIcon from "@mui/icons-material/Delete"; //delete icon
import { useRouter } from "next/router";

export const CreateButton = () => {
  return (
    <Link
      href={"products/create"}
      className="inline-flex items-center space-x-1 text-white bg-blue-600 hover:bg-blue-700 px-5 py-[9px] rounded-sm text-sm"
    >
      <AddCircleIcon />
      Add New Product
    </Link>
  );
};

export const EditButton = ({ id }) => {
  return (
    <Button>
      <Link
        href={`products/edit/${id}`}
        className=" rounded-sm  p-1 text-green-600 hover:bg-green-600  hover:text-white"
      >
        <DesignServicesIcon size={10} />
      </Link>
    </Button>
  );
};

export const DetailButton = ({ id }) => {
  return (
    <Button>
      <Link
        href={`products/detail/${id}`}
        className=" rounded-sm  p-1 text-blue-600 hover:bg-blue-600  hover:text-white"
      >
        <AssignmentIcon size={10} />
      </Link>
    </Button>
  );
};

export const DeleteButton = ({ id }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(`./api/products?id=${id}`, {
      method: "DELETE",
      headers: {
        "Conten-type": "application/json",
      },
    });
    if (!res.ok) {
      console.log("GAGAL menghapus data dengan id", id);
    } else {
      console.log("Berhasil menghapus data produk dengan id", id);
      router.reload();
    }
  };
  return (
    <Button
      onClick={handleDelete}
      className=" rounded-sm  p-1  text-red-600 hover:bg-red-600  hover:text-white"
    >
      <DeleteIcon size={20} />
    </Button>
  );
};

// export const SubmitButton = ({ label }) => {
//   const { pending } = useFormStatus();
//   const className = clsx(
//     "text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
//     {
//       "opacity-50  cursor-progres": pending,
//     }
//   );
//   return (
//     <button type="submit" className={className} disabled={pending}>
//       {label === "save" ? (
//         <span>{pending ? "Saving..." : "Save"}</span>
//       ) : (
//         <span>{pending ? "Updating..." : "Update"}</span>
//       )}
//     </button>
//   );
// };
