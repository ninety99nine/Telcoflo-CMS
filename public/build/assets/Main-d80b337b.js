import{_ as i}from"./AppLayout-5c7b956f.js";import r from"./Content-b958e1b9.js";import c from"./ManageCampaignModal-d5db2f3e.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";import{s as l,c as d,w as u,x as n,o as y,a as t,b as a}from"./app-aa3a5b47.js";import"./base-8c06a7ab.js";import"./el-popover-a252a186.js";import"./icon-377e2223.js";import"./constants-15145059.js";import"./CampaignBadge-0861ca7b.js";import"./Pagination-da9c2a8d.js";import"./moment-fbc5633a.js";import"./el-divider-58d7f219.js";import"./el-switch-1da30a2b.js";import"./index-0d447684.js";import"./TextInput-28a9ac13.js";import"./InputLabel-33de89bf.js";import"./Textarea-1fa6a91b.js";import"./PrimaryButton-e02593b1.js";import"./SelectInput-f4060b13.js";import"./DialogModal-624f465c.js";import"./DangerButton-be211269.js";import"./SecondaryButton-744ebfb5.js";const _=l({components:{AppLayout:i,CampaignsContent:r,ManageCampaignModal:c},props:{contentToSendOptions:Array,scheduleTypeOptions:Array,subscriptionPlans:Array,campaignsPayload:Object,projectPayload:Object}}),O={class:"py-12"},P={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"};function g(o,T,f,h,b,S){const p=n("manage-campaign-modal"),s=n("campaigns-content"),e=n("app-layout");return y(),d(e,{title:"Dashboard"},{default:u(()=>[t("div",O,[t("div",P,[a(p,{showAddbutton:!0,subscriptionPlans:o.subscriptionPlans,contentToSendOptions:o.contentToSendOptions,scheduleTypeOptions:o.scheduleTypeOptions},null,8,["subscriptionPlans","contentToSendOptions","scheduleTypeOptions"]),a(s,{projectPayload:o.projectPayload,campaignsPayload:o.campaignsPayload,subscriptionPlans:o.subscriptionPlans,contentToSendOptions:o.contentToSendOptions,scheduleTypeOptions:o.scheduleTypeOptions},null,8,["projectPayload","campaignsPayload","subscriptionPlans","contentToSendOptions","scheduleTypeOptions"])])])]),_:1})}const Q=m(_,[["render",g]]);export{Q as default};