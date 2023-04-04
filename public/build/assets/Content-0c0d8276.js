import{P as g}from"./Pagination-da9c2a8d.js";import u from"./ManageTopicModal-2f364613.js";import{s as y,e as s,b as l,a as t,F as _,h as f,f as n,x as p,o as i,t as c,i as r}from"./app-aa3a5b47.js";import{h as x}from"./moment-fbc5633a.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import"./base-8c06a7ab.js";import"./el-breadcrumb-item-a00e1850.js";import"./icon-377e2223.js";import"./index-0d447684.js";import"./InputLabel-33de89bf.js";import"./TextInput-28a9ac13.js";import"./Textarea-1fa6a91b.js";import"./PrimaryButton-e02593b1.js";import"./SelectInput-f4060b13.js";import"./DialogModal-624f465c.js";import"./DangerButton-be211269.js";import"./SecondaryButton-744ebfb5.js";const v=y({components:{ManageTopicModal:u,Pagination:g},props:{parentTopic:Object,topicsPayload:Object,breadcrumbs:Array},data(){return{isShowingModal:!1,modalAction:null,topic:null,moment:x}},methods:{showModal(e,a){this.topic=e,this.modalAction=a,this.isShowingModal=!0}}}),b={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},k={class:"flex flex-col"},M={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},P={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},C={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},$={class:"min-w-full divide-y divide-gray-200"},V=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},[t("span",null,"Title")]),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},[t("span",null,"Content")]),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right"},[t("span",null,"Actions")])])],-1),j={class:"bg-white divide-y divide-gray-200"},T={class:"px-6 py-4"},A={class:"text-sm text-gray-900"},S={class:"px-6 py-4"},N={class:"text-sm text-gray-900"},B={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},D=["onClick"],E=["onClick"],F=["onClick"],O={key:0},L=t("td",{colspan:7,class:"px-6 py-4 whitespace-nowrap"},[t("div",{class:"text-center text-gray-900 text-sm p-6"},"No topics")],-1),U=[L];function q(e,a,z,G,H,I){const m=p("manage-topic-modal"),h=p("pagination");return i(),s("div",null,[l(m,{modelValue:e.isShowingModal,"onUpdate:modelValue":a[0]||(a[0]=o=>e.isShowingModal=o),action:e.modalAction,topic:e.topic,parentTopic:e.parentTopic,breadcrumbs:e.breadcrumbs},null,8,["modelValue","action","topic","parentTopic","breadcrumbs"]),t("div",b,[t("div",k,[t("div",M,[t("div",P,[t("div",C,[t("table",$,[V,t("tbody",j,[(i(!0),s(_,null,f(e.topicsPayload.data,o=>(i(),s("tr",{key:o.id},[t("td",T,[t("div",A,c(o.title),1)]),t("td",S,[t("div",N,c(o.content),1)]),t("td",B,[e.$inertia.page.props.projectPermissions.includes("View topics")?(i(),s("a",{key:0,href:"#",onClick:r(d=>e.$inertia.get(e.route("show-topic",{project:e.route().params.project,topic:o.id})),["prevent"]),class:"text-indigo-600 hover:text-indigo-900 mr-3"},"View",8,D)):n("",!0),e.$inertia.page.props.projectPermissions.includes("Manage topics")?(i(),s("a",{key:1,href:"#",onClick:r(d=>e.showModal(o,"update"),["prevent"]),class:"text-indigo-600 hover:text-indigo-900 mr-3"},"Edit",8,E)):n("",!0),e.$inertia.page.props.projectPermissions.includes("Manage topics")?(i(),s("a",{key:2,href:"#",onClick:r(d=>e.showModal(o,"delete"),["prevent"]),class:"text-red-600 hover:text-red-900"},"Delete",8,F)):n("",!0)])]))),128)),e.topicsPayload.data.length==0?(i(),s("tr",O,U)):n("",!0)])])])])])]),l(h,{class:"mt-6",paginationPayload:e.topicsPayload,updateData:["topicsPayload"]},null,8,["paginationPayload"])])])}const lt=w(v,[["render",q]]);export{lt as default};