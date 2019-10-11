import { deleteData } from "@/api/somoplay";

export default {
    Delete(index, row) {
        // confirm delete
        this.$confirm("Are you sure to delete this row？", "WARNING", {
            type: "warning"
        }).then(() => {
            deleteData({ itemId: row._id });

            this.$message.success("Successfully Deleted");
            this.tableData.splice(index, 1);
        });
    }
}