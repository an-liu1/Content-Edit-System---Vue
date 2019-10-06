<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-folder"></i> SomoPlay
                </el-breadcrumb-item>
                 <el-breadcrumb-item>HeaderImage</el-breadcrumb-item>
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
                <el-table-column prop="nameEn" label="nameEn" width="170"></el-table-column>
                <el-table-column prop="nameCh" label="nameCh" width="170"></el-table-column>
                <el-table-column label="images" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="imgs(scope.row)"
                            :preview-src-list="getSrcList(scope.$index)"
                        ></el-image>
                    </template>
                </el-table-column>
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
                <el-form-item label="nameEn">
                    <el-input v-model="form.nameEn"></el-input>
                </el-form-item>
                <el-form-item label="nameCh">
                    <el-input v-model="form.nameCh"></el-input>
                </el-form-item>
                <el-form-item label="nameTr">
                    <el-input v-model="form.nameTr"></el-input>
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
                <el-form-item v-for="(item,index) in tableData[0]" :key="index" :label="index">
                    <el-input v-model="addForm[index]"></el-input>
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
export default {
    data() {
        return {
            query: {
                address: "",
                name: "",
                pageIndex: 1,
                pageSize: 5
            },
            tableData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            addVisible: false,
            pageTotal: 0,
            form: {},
            addForm: {},
            idx: -1,
            id: -1,
            imgList: []
        };
    },
    created() {
        this.getData("headerImage", "somoplay", "method");
    },
    computed: {
        imgs: function() {
            return function(item) {
                let imgaddress =
                    "http://159.89.121.159:3001/images/" +
                    item.mainImageType +
                    "/" +
                    item.mainImage;
                // this.imgList.push(imgaddress);
                return imgaddress;
            };
        }
    },
    methods: {
        getData(sectionName, appName, pageName) {
            this.$http
                .get(
                    "http://159.89.121.159:3001/somo/contentBySection?appName=" +
                        appName +
                        "&sectionName=" +
                        sectionName +
                        "&pageName=" +
                        pageName
                )
                .then(({ data }) => {
                    this.tableData = data.data.slice(
                        (this.query.pageIndex - 1) * this.query.pageSize,
                        this.query.pageIndex * this.query.pageSize
                    );
                    this.pageTotal = data.data.length;
                    this.tableData.map(a => {
                        this.imgList.push(
                            "http://159.89.121.159:3001/images/" +
                                a.mainImageType +
                                "/" +
                                a.mainImage
                        );
                    });
                });
        },
        getSrcList(index) {
            return this.imgList.slice(index).concat(this.imgList.slice(0, index));
        },
        // 触发搜索按钮
        // handleSearch() {
        //     this.getData("headerImage", "somoplay", "method", this.query.name);
        // },
        // // 删除操作
        // handleDelete(index, row) {
        //     // 二次确认删除
        //     this.$confirm("确定要删除吗？", "提示", {
        //         type: "warning"
        //     })
        //         .then(() => {
        //             this.$message.success("删除成功");
        //             this.tableData.splice(index, 1);
        //         })
        //         .catch(() => {});
        // },
        // 多选操作
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
            this.$message.error(`删除了${str}`);
            this.multipleSelection = [];
        },
        // 编辑操作
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
            // console.log(index + "------" + row._id);
        },
        handleAdd() {
            this.addVisible = true;
        },
        // 保存编辑
        saveEdit() {
            console.log(this.form);
            this.form.itemId = this.form._id;
            this.$http
                .put("http://159.89.121.159:3001/somo/content", this.form)
                .then(res => {
                    const { status } = res;
                    if (status === 200) {
                        this.editVisible = false;
                        this.$message.success(
                            `Successfully Edit ${this.idx + 1} Row`
                        );
                    }
                });
        },
        saveNew() {
            console.log(this.addForm);
            for (const key in this.tableData[1]) {
                if (this.addForm[key] == undefined) {
                    this.addForm[key] = "";
                }
            }
            this.$http
                .post("http://159.89.121.159:3001/somo/content", this.addForm)
                .then(res => {
                    const { status } = res;
                    if (status === 200) {
                        this.addVisible = false;
                        this.$message.success(`Successfully Insert a new Row`);
                    }
                });
        },
        handlePageChange(val) {
            this.query.pageIndex = val;
            this.getData("headerImage", "somoplay", "method");
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
