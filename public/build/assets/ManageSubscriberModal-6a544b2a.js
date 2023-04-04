import{s as v,e as o,c,w as l,f as d,a as r,b as u,x as i,o as t,g as n,F as p,t as M,i as m,n as h}from"./app-aa3a5b47.js";import{_ as k,a as j}from"./TextInput-28a9ac13.js";import{_ as $}from"./InputLabel-33de89bf.js";import{_ as C}from"./PrimaryButton-e02593b1.js";import{J as T}from"./SelectInput-f4060b13.js";import{a as V}from"./DialogModal-624f465c.js";import{_ as E}from"./DangerButton-be211269.js";import{_ as B}from"./ActionMessage-4ea3d40a.js";import{_ as D}from"./SecondaryButton-744ebfb5.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";const O=v({components:{JetLabel:$,JetInput:k,JetButton:C,JetInputError:j,JetSelectInput:T,JetDialogModal:V,JetSecondaryButton:D,JetActionMessage:B,JetDangerButton:E},props:{action:{type:String,default:"update"},modelValue:{type:Boolean,default:!1},showAddbutton:{type:Boolean,default:!1},subscriber:{type:Object,default:null},show:{type:Boolean,default:!1}},data(){return{form:null,showModal:this.modelValue,showSuccessMessage:!1,showErrorMessage:!1}},watch:{showModal:{handler:function(e,s){e!=this.modelValue&&this.$emit("update:modelValue",e)}},modelValue:{handler:function(e,s){e!=this.showModal&&(this.showModal=e,this.reset())}}},computed:{hasSubscriber(){return this.subscriber!=null},wantsToUpdate(){return!!(this.hasSubscriber&&this.action=="update")},wantsToDelete(){return!!(this.hasSubscriber&&this.action=="delete")}},methods:{openModal(){this.showModal=!0},closeModal(){this.showModal=!1},create(){var e={preserveState:!0,preserveScroll:!0,replace:!0,onSuccess:s=>{this.handleOnSuccess()},onError:s=>{this.handleOnError()}};this.form.post(route("create-subscriber",{project:route().params.project}),e)},update(){var e={preserveState:!0,preserveScroll:!0,replace:!0,onSuccess:s=>{this.handleOnSuccess()},onError:s=>{this.handleOnError()}};this.form.put(route("update-subscriber",{project:route().params.project,subscriber:this.subscriber.id}),e)},destroy(){var e={preserveState:!0,preserveScroll:!0,replace:!0,onSuccess:s=>{this.handleOnSuccess()},onError:s=>{this.handleOnError()}};this.form.delete(route("delete-subscriber",{project:route().params.project,subscriber:this.subscriber.id}),e)},handleOnSuccess(){this.reset(),this.closeModal(),this.showSuccessMessage=!0,setTimeout(()=>{this.showSuccessMessage=!1},3e3)},handleOnError(){this.showErrorMessage=!0,setTimeout(()=>{this.showErrorMessage=!1},3e3)},reset(){this.form=this.$inertia.form({msisdn:this.hasSubscriber?this.subscriber.msisdn:null})}},created(){this.reset()}}),U={class:"clear-both"},A={key:0,class:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6",role:"alert"},L={key:0,class:"font-bold"},N={key:1,class:"font-bold"},z={key:2,class:"font-bold"},I=r("svg",{class:"fill-current h-6 w-6 text-green-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[r("title",null,"Close"),r("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})],-1),F=[I],P={key:1,class:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6",role:"alert"},q={key:0,class:"font-bold"},G={key:1,class:"font-bold"},H={key:2,class:"font-bold"},K=r("svg",{class:"fill-current h-6 w-6 text-red-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[r("title",null,"Close"),r("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})],-1),Q=[K],R=r("span",{class:"block mt-6 mb-6"},"Are you sure you want to delete this subscriber?",-1),W={class:"text-sm text-gray-500"},X={key:1,class:"mb-4"};function Y(e,s,Z,x,ee,se){const b=i("jet-button"),f=i("jet-label"),g=i("jet-input"),w=i("jet-input-error"),_=i("jet-secondary-button"),y=i("jet-danger-button"),S=i("jet-dialog-modal");return t(),o("div",null,[e.$inertia.page.props.projectPermissions.includes("Manage subscribers")&&e.showAddbutton?(t(),c(b,{key:0,onClick:s[0]||(s[0]=a=>e.openModal()),class:"float-right mb-6"},{default:l(()=>[n(" Add Subscriber ")]),_:1})):d("",!0),r("div",U,[e.showSuccessMessage?(t(),o("div",A,[e.wantsToUpdate?(t(),o("strong",L,"Subscriber updated successfully")):e.wantsToDelete?(t(),o("strong",N,"Subscriber deleted successfully")):(t(),o("strong",z,"Subscriber created successfully")),r("span",{onClick:s[1]||(s[1]=a=>e.showSuccessMessage=!1),class:"absolute top-0 bottom-0 right-0 px-4 py-3"},F)])):d("",!0),e.showErrorMessage?(t(),o("div",P,[e.wantsToUpdate?(t(),o("strong",q,"Subscriber update failed")):e.wantsToDelete?(t(),o("strong",G,"Subscriber delete failed")):(t(),o("strong",H,"Subscriber creation failed")),r("span",{onClick:s[2]||(s[2]=a=>e.showSuccessMessage=!1),class:"absolute top-0 bottom-0 right-0 px-4 py-3"},Q)])):d("",!0),u(S,{show:e.showModal,closeable:!1},{title:l(()=>[e.wantsToUpdate?(t(),o(p,{key:0},[n("Update Subscriber")],64)):e.wantsToDelete?(t(),o(p,{key:1},[n("Delete Subscriber")],64)):(t(),o(p,{key:2},[n("Add Subscriber")],64))]),content:l(()=>[e.wantsToDelete?(t(),o(p,{key:0},[R,r("p",W,M(e.subscriber.msisdn),1)],64)):(t(),o("div",X,[u(f,{for:"msisdn",value:"Mobile"}),u(g,{id:"msisdn",type:"text",class:"mt-1 block w-full",modelValue:e.form.msisdn,"onUpdate:modelValue":s[3]||(s[3]=a=>e.form.msisdn=a),placeholder:"26772000001"},null,8,["modelValue"]),u(w,{message:e.form.errors.msisdn,class:"mt-2"},null,8,["message"])]))]),footer:l(()=>[u(_,{onClick:s[4]||(s[4]=a=>e.closeModal()),class:"mr-2"},{default:l(()=>[n(" Cancel ")]),_:1}),e.hasSubscriber?d("",!0):(t(),c(b,{key:0,onClick:s[5]||(s[5]=m(a=>e.create(),["prevent"])),class:h({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:l(()=>[n(" Create ")]),_:1},8,["class","disabled"])),e.wantsToUpdate?(t(),c(b,{key:1,onClick:s[6]||(s[6]=m(a=>e.update(),["prevent"])),class:h({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:l(()=>[n(" Update ")]),_:1},8,["class","disabled"])):d("",!0),e.wantsToDelete?(t(),c(y,{key:2,onClick:s[7]||(s[7]=m(a=>e.destroy(),["prevent"])),class:h({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:l(()=>[n(" Delete ")]),_:1},8,["class","disabled"])):d("",!0)]),_:1},8,["show"])])])}const pe=J(O,[["render",Y]]);export{pe as default};
