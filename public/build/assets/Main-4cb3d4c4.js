import{_ as p}from"./AppLayout-fbcf0721.js";import n from"./Content-f44d0f1e.js";import i from"./ManageSubscriberModal-881dbcb0.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";import{s as b,c as l,w as _,x as o,o as u,a as t,b as e}from"./app-60cd852f.js";import"./Pagination-82ef7ad5.js";import"./moment-fbc5633a.js";import"./TextInput-f1c7bf7a.js";import"./InputLabel-7d611d97.js";import"./PrimaryButton-866b8f7f.js";import"./SelectInput-9e59669e.js";import"./DialogModal-f1eb62ea.js";import"./DangerButton-b4b573dd.js";import"./ActionMessage-e9efacb5.js";import"./SecondaryButton-34f773dd.js";const d=b({components:{AppLayout:p,SubscribersContent:n,CreateSubscriberModal:i},props:{totalMessages:Number,subscribersPayload:Object}}),f={class:"py-12"},x={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"};function y(s,h,M,g,C,$){const r=o("create-subscriber-modal"),a=o("subscribers-content"),c=o("app-layout");return u(),l(c,{title:"Dashboard"},{default:_(()=>[t("div",f,[t("div",x,[e(r,{showAddbutton:!0}),e(a,{subscribersPayload:s.subscribersPayload,totalMessages:s.totalMessages},null,8,["subscribersPayload","totalMessages"])])])]),_:1})}const E=m(d,[["render",y]]);export{E as default};