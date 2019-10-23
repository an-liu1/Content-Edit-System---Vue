<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-folder"></i> SomoPlay
                </el-breadcrumb-item>
                <el-breadcrumb-item>Footer</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container1">
            <div class="handle-box">
                <el-button type="primary" icon="el-icon-circle-plus-outline" @click="handleAdd">New</el-button>
                <el-button
                    type="primary"
                    icon="el-icon-delete"
                    class="handle-del mr10"
                    @click="delAllSelection"
                >Batch Remove</el-button>
                <!-- 
                <el-input v-model="query.name" placeholder="name" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">Search</el-button>-->
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="nameEn" label="nameEn"></el-table-column>
                <el-table-column prop="nameCh" label="nameCh"></el-table-column>
                <el-table-column prop="nameTr" label="nameTr"></el-table-column>
                <el-table-column prop="appName" label="appName"></el-table-column>
                <el-table-column prop="pageName" label="pageName"></el-table-column>
                <el-table-column prop="sectionName" label="sectionName"></el-table-column>
                <el-table-column prop="positionName" label="positionName"></el-table-column>

                <el-table-column label="Operation" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >Edit</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row)"
                        >Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next, jumper"
                    :current-page="query.pageIndex"
                    :page-size="query.pageSize"
                    :total="pageTotal"
                    @current-change="handlePageChange"
                ></el-pagination>
            </div>
        </div>

        <!-- EditBoard -->
        <Editdialog
            :form="form"
            :editForm="editForm"
            :idx="idx"
            :editVisible="editVisible"
            @close-dialogStatus="Close_dialog"
        ></Editdialog>
        <!-- AddBoard -->
        <Adddialog :formData="formData" :addVisible="addVisible" @close-dialogStatus="Close_dialog"></Adddialog>
    </div>
</template>

<script>
import { getData, deleteData } from "@/api/somoplay";
import Adddialog from "@/components/parts/AddBoard";
import Editdialog from "@/components/parts/EditBoard";
export default {
    name: "Footer",
    data() {
        return {
            query: {
                address: "",
                name: "",
                pageIndex: 1,
                pageSize: 10
            },
            tableData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            addVisible: false,
            pageTotal: 0,
            form: {},
            formData: {
                nameEn: "",
                nameCh: "",
                nameTr: "",
                appName: "somoplay",
                pageName: "all",
                sectionName: "footer"
            },
            editForm: {
                nameEn: "",
                nameCh: "",
                nameTr: ""
            },
            idx: -1,
            id: -1
        };
    },
    components: { Adddialog, Editdialog },
    created() {
        this.handleData();
    },
    methods: {
        async handleData() {
            let address = "?appName=somoplay&sectionName=footer&pageName=all";
            let res = await getData(address);
            this.tableData = res.data.slice(
                (this.query.pageIndex - 1) * this.query.pageSize,
                this.query.pageIndex * this.query.pageSize
            );
            this.pageTotal = res.data.length;
        },

        // handleSearch() {
        //     this.getData("topMenu", "somoplay", "all", this.query.name);
        // },

        // Delete
        async handleDelete(index, row) {
            // confirm delete
            this.$confirm("Are you sure to delete this row？", "WARNING", {
                type: "warning"
            }).then(() => {
                deleteData({ itemId: row._id });

                this.$message.success("Successfully Deleted");
                this.tableData.splice(index, 1);
            });
        },
        // multiSelect
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        //deleteAll
        delAllSelection() {
            const length = this.multipleSelection.length;
            let str = "";
            this.delList = this.delList.concat(this.multipleSelection);
            for (let i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + " ";
            }
            this.$message.error(`Deleted ${str}`);
            this.multipleSelection = [];
        },
        // Edit
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
        },
        //add
        handleAdd() {
            this.addVisible = true;
        },

        Close_dialog() {
            this.addVisible = false;
            this.editVisible = false;
        },
        // Paging
        handlePageChange(val) {
            this.query.pageIndex = val;
            this.handleData();
        }
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
