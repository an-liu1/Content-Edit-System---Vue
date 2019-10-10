<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-folder"></i> SomoPlay
                </el-breadcrumb-item>
                <el-breadcrumb-item>Map</el-breadcrumb-item>
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
                <el-table-column prop="link" label="address"></el-table-column>
                <el-table-column prop="appName" label="appName"></el-table-column>
                <el-table-column prop="pageName" label="pageName"></el-table-column>
                <el-table-column prop="sectionName" label="sectionName"></el-table-column>

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
        <el-dialog title="Eidt" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="address">
                    <el-input v-model="form.link"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">Cancle</el-button>
                <el-button type="primary" @click="saveEdit">Submit</el-button>
            </span>
        </el-dialog>

        <!-- AddBoard -->
        <el-dialog title="Add" :visible.sync="addVisible" width="50%">
            <el-form ref="addForm" :model="addForm" label-width="150px">
                <el-form-item label="address">
                    <el-input v-model="addForm.link"></el-input>
                </el-form-item>
                <el-form-item label="appName">
                    <el-input v-model="addForm.appName" disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="pageName">
                    <el-input v-model="addForm.pageName" disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="sectionName">
                    <el-input v-model="addForm.sectionName" disabled="true"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addVisible = false">Cancle</el-button>
                <el-button type="primary" @click="saveNew">Submit</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { getData, newData, deleteData, editData } from "@/api/somoplay";
export default {
    inject: ["reload"],
    name: "Map",
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
            addForm: {
                appName: "somoplay",
                pageName: "contact",
                sectionName: "map"
            },
            idx: -1,
            id: -1,
            imgList: []
        };
    },
    created() {
        this.handleData();
    },
    methods: {
        async handleData() {
            let address = "?appName=somoplay&sectionName=map&pageName=contact";
            let res = await getData(address);
            this.tableData = res.data.slice(
                (this.query.pageIndex - 1) * this.query.pageSize,
                this.query.pageIndex * this.query.pageSize
            );
            this.pageTotal = res.data.length;
        },

        getSrcList(index) {
            return this.imgList
                .slice(index)
                .concat(this.imgList.slice(0, index));
        },
        // handleSearch() {
        //     this.getData("slideShow", "somoplay", "home", this.query.name);
        // },

        //Delete
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
        // saveEdit
        async saveEdit() {
            this.form.itemId = this.form._id;
            let res = await editData(this.form);

            const { code } = res;
            if (code === 0) {
                this.editVisible = false;
                this.$message.success(`Successfully Edit ${this.idx + 1} Row`);
            }
        },
        //add
        handleAdd() {
            this.addVisible = true;
        },
        //save new
        async saveNew() {
            console.log(this.addForm);
            for (const key in this.tableData[1]) {
                if (this.addForm[key] == undefined) {
                    this.addForm[key] = "";
                }
            }
            let res = await newData(this.addForm);

            const { code } = res;
            if (code === 0) {
                this.addVisible = false;
                this.$message.success(`Successfully Insert a new Row`);
                this.reload();
            }
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
