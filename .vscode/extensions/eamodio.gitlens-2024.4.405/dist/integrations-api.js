exports.id=773,exports.ids=[773],exports.modules={910:(e,t,r)=>{let s,a,o;var i=Object.create,n=Object.defineProperty,l=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,d=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,c=(e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})},h=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of u(t))p.call(e,a)||a===r||n(e,a,{get:()=>t[a],enumerable:!(s=l(t,a))||s.enumerable});return e},g={};c(g,{AzureDevOps:()=>Q,AzureDevopsUtils:()=>tC,Bitbucket:()=>H,BitbucketServer:()=>W,BitbucketServerUtils:()=>tT,BitbucketUtils:()=>tA,GitHub:()=>e_,GitHubUtils:()=>tY,GitLab:()=>tn,GitLabUtils:()=>t1,GitProviderUtils:()=>tQ,Jira:()=>t$,JiraServer:()=>tP,JiraUtils:()=>t7,Trello:()=>tS,TrelloUtils:()=>t8,Utils:()=>re,default:()=>t9}),e.exports=h(n({},"__esModule",{value:!0}),g);var m={APPROVED:0,COMMENTED:1,REVIEW_REQUESTED:2,CHANGES_REQUESTED:3},f=e=>e&&0!==e.length?e.reduce((e,t)=>m[t.state]>m[e]?t.state:e,"APPROVED"):null,y=(o=null!=(s=r(8540))?i(d(s)):{},h(!a&&s&&s.__esModule?o:n(o,"default",{value:s,enumerable:!0}),s)),v=globalThis.fetch||y.default,R=async e=>{let t=e.headers.get("content-type")||"",r=null;if(t.startsWith("application/json")){let t=await e.text();r=t.trim().length>0?JSON.parse(t):null}else if(t.startsWith("text/")||""===t)r=await e.text();else if(t.startsWith("application/vnd.github.raw+json"))r=await e.arrayBuffer();else throw Error(`Unsupported content-type: ${t}`);let s={body:r,headers:Object.fromEntries(e.headers.entries()),status:e.status,statusText:e.statusText};if(!e.ok){let t=Error(e.statusText);throw Object.assign(t,{response:s}),t}return s},b=e=>async({url:t,...r})=>R(await e(t,r)),I=(e,t=!1)=>"fetch"===e.name||t,w=class{constructor(e){let t=(null==e?void 0:e.request)||v;this.config={...e,request:I(t,null==e?void 0:e.forceIsFetch)?b(t):t}}updateConfig(e){this.config={...this.config,...e,request:e.request&&I(e.request,(null==e?void 0:e.forceIsFetch)??this.config.forceIsFetch)?b(e.request):this.config.request}}},q=class extends w{},$=(e,t)=>{let r={};return e&&(r.Authorization=`${t?"Basic":"Bearer"} ${e}`),r},P=e=>e?e.reduce((e,t)=>(e[t]=!0,e),{}):void 0,E=(e,t,r)=>!e||t.some(t=>e[t])?r:"",U=(e,t={})=>$(t.token||e.token,t.isPAT||e.isPAT),S=e=>e.url.replace("/_apis/git/repositories/","/_git/").replace(`/${e.repository.project.id}/`,`/${encodeURIComponent(e.repository.project.name)}/`).replace(`/${e.repository.id}/`,`/${encodeURIComponent(e.repository.name)}/`).replace("/pullRequests/","/pullrequest/"),C="https://app.vssps.visualstudio.com/_apis",D="https://dev.azure.com",L={active:"OPEN",completed:"MERGED",abandoned:"CLOSED"},A={10:"APPROVED",5:"APPROVED",0:"REVIEW_REQUESTED",[-5]:"CHANGES_REQUESTED",[-10]:"CHANGES_REQUESTED"},F=e=>({id:e.id,name:e.displayName,username:e.uniqueName||e.displayName,email:null,avatarUrl:e.imageUrl,url:null}),N=e=>e.startsWith("refs/heads/")?e.replace("refs/heads/",""):e,T=(e,t)=>{var r;let s=t.reviewers.filter(e=>0!==e.vote).map(e=>({reviewer:F(e),state:A[e.vote]||"REVIEW_REQUESTED"}));return{id:t.pullRequestId.toString(),title:t.title,number:t.codeReviewId,state:L[t.status],isDraft:t.isDraft,commentCount:null,upvoteCount:null,author:F(t.createdBy),createdDate:new Date(t.creationDate),updatedDate:new Date(t.closedDate||t.creationDate),closedDate:t.closedDate?new Date(t.closedDate):null,mergedDate:t.closedDate&&"completed"===t.status?new Date(t.closedDate):null,repository:{id:t.repository.id,name:t.repository.name,project:t.repository.project.name,owner:{login:e},remoteInfo:null},headCommit:{buildStatuses:null},baseRef:{name:N(t.targetRefName),oid:t.lastMergeTargetCommit.commitId},headRef:{name:N(t.sourceRefName),oid:t.lastMergeSourceCommit.commitId},url:S(t),assignees:t.reviewers.map(F),reviews:s,reviewDecision:f(s),additions:null,deletions:null,fileCount:null,commitCount:null,headRepository:null,mergeableState:"UNKNOWN",labels:(null==(r=t.labels)?void 0:r.map(e=>({color:null,description:null,id:e.id,name:e.name})))??[],permissions:null}},j=(e,t)=>({id:t.id,name:t.name,namespace:e,project:t.project.name,webUrl:t.webUrl,httpsUrl:t.remoteUrl,sshUrl:t.sshUrl,defaultBranch:t.defaultBranch?{name:N(t.defaultBranch)}:null,permission:null}),k=(e,t,r,s)=>{var a,o;let i=r.fields,n=i["System.AssignedTo"],l=i["System.State"],u=i["System.WorkItemType"],d;return l&&u&&(d=null==(a=s[u])?void 0:a[l]),{id:r.id.toString(),number:r.id.toString(),title:i["System.Title"],commentCount:i["System.CommentCount"],author:{avatarUrl:i["System.CreatedBy"]._links.avatar.href,email:null,id:i["System.CreatedBy"].id,name:i["System.CreatedBy"].uniqueName,username:i["System.CreatedBy"].displayName,url:null},closedDate:i["Microsoft.VSTS.Common.ClosedDate"]?new Date(i["Microsoft.VSTS.Common.ClosedDate"]):null,createdDate:new Date(i["System.CreatedDate"]),updatedDate:new Date(i["System.ChangedDate"]),url:r._links.html.href,assignees:n?[{avatarUrl:n._links.avatar.href,email:null,id:n.id,name:n.uniqueName,username:n.displayName,url:null}]:[],description:null,state:{name:(null==d?void 0:d.title)||l,color:null},type:i["System.WorkItemType"],repository:null,project:{namespace:e,name:t,resourceId:null},upvoteCount:0,labels:(null==(o=r.fields["System.Tags"])?void 0:o.split(";").map(e=>({color:null,description:null,id:null,name:e.trim()})))??[]}},Q=class extends w{async getCurrentUser(e={},t={}){if(t.isPAT||this.config.isPAT)throw Error("Azure DevOps does not support PATs for this function.");let r=await this.config.request({url:`${C}/profile/profiles/me`,headers:U(this.config,t)});return{data:{id:r.body.id,name:r.body.displayName,username:r.body.displayName,email:r.body.emailAddress,avatarUrl:null,url:null}}}async getCurrentUserForInstance(e,t={}){let r=(await this.config.request({url:`${D}/${encodeURIComponent(e.namespace)}/_apis/ConnectionData`,headers:U(this.config,t)})).body.authorizedUser;if("Anonymous"===r.providerDisplayName)throw Error("Current user not found.");return{data:{id:r.id,name:r.providerDisplayName,username:r.providerDisplayName,email:r.properties.Account.$value,avatarUrl:null}}}async getUserForCommit(e,t={}){if(!e.repo.project)throw Error('Azure DevOps requires a "project" (name or ID) for this function.');let r=(await this.config.request({url:`${D}/${encodeURIComponent(e.repo.namespace)}/${encodeURIComponent(e.repo.project)}/_apis/git/repositories/${encodeURIComponent(e.repo.name)}/commits/${e.oid}`,headers:U(this.config,t)})).body.author;return{data:{name:r.name,email:r.email,avatarUrl:r.imageUrl}}}async getOrgsForUser(e,t={}){return{data:(await this.config.request({url:`${C}/accounts?memberId=${e.userId}&api-version=6.0`,headers:U(this.config,t)})).body.value.map(e=>({id:e.accountId,name:e.accountName}))}}async getAzureProjects(e,t={}){let r=new URL(`${D}/${encodeURIComponent(e.namespace)}/_apis/projects`);r.searchParams.set("$top","100"),e.cursor&&r.searchParams.set("$skip",e.cursor);let s=await this.config.request({url:r.toString(),headers:U(this.config,t)}),a=s.headers["x-ms-continuationtoken"];return{pageInfo:{hasNextPage:!!a,endCursor:a||null},data:s.body.value.map(t=>({id:t.id,name:t.name,namespace:e.namespace}))}}async getAzureProjectScopeDescriptor(e,t={}){let{namespace:r,projectId:s}=e;return{data:{scope:(await this.config.request({url:`https://vssps.dev.azure.com/${encodeURIComponent(r)}/_apis/graph/descriptors/${s}?api-version=6.0`,headers:U(this.config,t)})).body.value}}}async getAzureGraphAccountsForAzureProject(e,t={}){let{namespace:r,projectScopeDescriptor:s,cursor:a}=e,o=new URL(`https://vssps.dev.azure.com/${encodeURIComponent(r)}/_apis/graph/users`);s&&o.searchParams.set("scopeDescriptor",s),a&&o.searchParams.set("continuationToken",a);let i=await this.config.request({url:o.toString(),headers:U(this.config,t)}),n=i.headers["x-ms-continuationtoken"];return{pageInfo:{endCursor:n||null,hasNextPage:!!n},data:i.body.value.map(e=>{var t;return{avatarUrl:(null==(t=e._links.avatar)?void 0:t.href)??null,descriptor:e.descriptor,email:e.mailAddress,name:e.displayName,storageKeyURL:e._links.storageKey.href,username:e.displayName}})}}async getAccountFromAzureGraphAccount(e,t={}){let{azureGraphAccount:r}=e,s=await this.config.request({url:r.storageKeyURL,headers:U(this.config,t)});return{data:{avatarUrl:r.avatarUrl,email:r.email,id:s.body.value,name:r.name,username:r.username,url:null}}}async getAccountsFromAzureGraphAccounts(e,t={}){let r=[];for(let s of e.azureGraphAccounts){let e=await this.getAccountFromAzureGraphAccount({azureGraphAccount:s},t);r.push(e.data)}return{data:r}}async getRepo(e,t={}){if(!e.project)throw Error('Azure DevOps requires a "project" (name or ID) for this function.');let r=await this.config.request({url:`${D}/${encodeURIComponent(e.namespace)}/${encodeURIComponent(e.project)}/_apis/git/repositories/${encodeURIComponent(e.name)}`,headers:U(this.config,t)});return{data:j(e.namespace,r.body)}}async getRepos(e,t={}){let r=[],s=[];return await Promise.all(e.map(async e=>{try{let s=await this.getRepo(e,t);r.push(s.data)}catch(t){s.push({input:e,error:t})}})),{data:r,errors:s}}async getReposForAzureProject(e,t={}){if(!e.project)throw Error('Azure DevOps requires a "project" (name or ID) for this function.');return{data:(await this.config.request({url:`${D}/${encodeURIComponent(e.namespace)}/${encodeURIComponent(e.project)}/_apis/git/repositories`,headers:U(this.config,t)})).body.value.map(t=>j(e.namespace,t))}}async getRefs(e,t,r={}){if(!t.repo.project)throw Error('Azure DevOps requires a "project" (name or ID) for this function.');let s=new URL(`${D}/${encodeURIComponent(t.repo.namespace)}/${encodeURIComponent(t.repo.project)}/_apis/git/repositories/${encodeURIComponent(t.repo.name)}/refs`);s.searchParams.set("filter",e),s.searchParams.set("$top","100"),t.cursor&&s.searchParams.set("continuationToken",t.cursor);let a=await this.config.request({url:s.toString(),headers:U(this.config,r)}),o=a.headers["x-ms-continuationtoken"];return{pageInfo:{hasNextPage:!!o,endCursor:o||null},data:a.body.value.map(e=>({name:N(e.name),commit:{oid:e.objectId,authoredDate:null,committedDate:null}}))}}async getBranches(e,t={}){return this.getRefs("heads",e,t)}async getTags(e,t={}){return this.getRefs("tags",e,t)}async getPullRequestsForRepoBase(e,t={},r=100){let{page:s,repo:a,assigneeLogins:o,authorLogin:i}=e||{};if(!a.project)throw Error('Azure DevOps requires a "project" (name or ID) for this function.');let n="searchCriteria.status=1";return o&&o.length&&(n+=`&searchCriteria.reviewerId=${o[0]}`),i&&(n+=`&searchCriteria.creatorId=${i}`),await this.config.request({url:`${t.baseUrl||D}/${encodeURIComponent(a.namespace)}/${encodeURIComponent(a.project||"")}/_apis/git/repositories/${encodeURIComponent(a.name)}/pullRequests?${n}&%24top=${r}&%24skip=${((s||1)-1)*r}`,headers:U(this.config,t)})}async getPullRequestsForRepo(e,t={}){let r=e.page||1,s=await this.getPullRequestsForRepoBase(e,t,100);return{pageInfo:{hasNextPage:100===s.body.value.length,nextPage:r+1},data:s.body.value.map(t=>T(e.repo.namespace,t))}}async getPullRequestsForRepos(e,t={}){if(!e.repos.every(e=>e.project))throw Error('Azure DevOps requires a "project" (name or ID) for this function.');let{repos:r}=e||{},s=[];return await Promise.all(r.map(async r=>{try{(await this.getPullRequestsForRepoBase({repo:r,...e},t)).body.value.forEach(e=>{s.push(T(r.namespace,e))})}catch(e){if(404!==e.statusCode&&401!==e.statusCode)throw e}})),{data:s}}async getPullRequestsForProjectBase(e,t={},r=100){let{namespace:s,project:a,page:o,assigneeLogins:i,authorLogin:n}=e,l=new URL(`${t.baseUrl||D}/${encodeURIComponent(s)}/${encodeURIComponent(a)}/_apis/git/pullRequests`);return l.searchParams.set("searchCriteria.status","1"),l.searchParams.set("$top",r.toString()),l.searchParams.set("$skip",(((o||1)-1)*r).toString()),i&&i.length&&l.searchParams.set("searchCriteria.reviewerId",i[0]),n&&l.searchParams.set("searchCriteria.creatorId",n),await this.config.request({url:l.toString(),headers:U(this.config,t)})}async getPullRequestsForProject(e,t={}){let r=e.page||1,s=await this.getPullRequestsForProjectBase(e,t,100);return{pageInfo:{hasNextPage:100===s.body.value.length,nextPage:r+1},data:s.body.value.map(t=>T(e.namespace,t))}}async getPullRequestsForProjects(e,t={}){let{projects:r}=e||{},s=[];return await Promise.all(r.map(async r=>{try{(await this.getPullRequestsForProjectBase({...r,...e},t)).body.value.forEach(e=>{s.push(T(r.namespace,e))})}catch(e){if(404!==e.statusCode&&401!==e.statusCode)throw e}})),{data:s}}async getAzurePullRequestLastMergeStatus(e,t={}){if(!e.repo.project)throw Error('Azure DevOps requires a "project" (name or ID) for this function.');let{repo:{namespace:r,project:s,name:a},pullRequestId:o}=e,i=await this.config.request({url:`${t.baseUrl||D}/${encodeURIComponent(r)}/${encodeURIComponent(s||"")}/_apis/git/repositories/${a}/pullrequests/${o}?includeCommits=true?api-version=6.0`,headers:{...U(this.config,t)}});if(!i.body.mergeStatus)throw Error("Could not fetch pull request");return{data:i.body.mergeStatus}}async updatePullRequest(e,t,r){return await this.config.request({method:"PATCH",url:`${r.baseUrl||D}/${encodeURIComponent(e.repository.owner.login)}/${encodeURIComponent(e.repository.project)}/_apis/git/repositories/${e.repository.name}/pullrequests/${e.id}?api-version=6.0`,body:t,headers:{...U(this.config,r),"Content-Type":"application/json"}})}async closePullRequest(e,t={}){let{pullRequest:r}=e;if(!(await this.updatePullRequest(r,JSON.stringify({status:"abandoned"}),t)).body.status)throw Error("Could not close pull request")}async mergePullRequest(e,t={}){var r;let{pullRequest:s,mergeStrategy:a}=e,o;switch(a){case"MERGE_COMMIT":o="noFastForward";break;case"REBASE":o="rebase";break;case"REBASE_THEN_MERGE_COMMIT":o="rebaseMerge";break;case"SQUASH":o="squash"}let i={completionOptions:{mergeStrategy:o},lastMergeSourceCommit:{commitId:null==(r=s.headRef)?void 0:r.oid},status:"completed"};if(!(await this.updatePullRequest(s,JSON.stringify(i),t)).body.status)throw Error("Could not merge pull request")}async addPullRequestLabel(e,t={}){let{pullRequest:r,label:s}=e;if(!r.repository.project)throw Error('Azure DevOps requires a "project" (name or ID) for this function.');let a={name:s.name};if(!(await this.config.request({method:"POST",url:`${t.baseUrl||D}/${encodeURIComponent(r.repository.owner.login)}/${encodeURIComponent(r.repository.project)}/_apis/git/repositories/${r.repository.name}/pullrequests/${r.id}/labels?api-version=6.0`,body:JSON.stringify(a),headers:{...U(this.config,t),"Content-Type":"application/json"}})).body.id)throw Error("Could not add pull request label")}async removePullRequestLabel(e,t={}){let{pullRequest:r,label:s}=e;if(!r.repository.project)throw Error('Azure DevOps requires a "project" (name or ID) for this function.');await this.config.request({method:"DELETE",url:`${t.baseUrl||D}/${encodeURIComponent(r.repository.owner.login)}/${encodeURIComponent(r.repository.project)}/_apis/git/repositories/${r.repository.name}/pullrequests/${r.id}/labels/${encodeURIComponent(s.name)}?api-version=6.0`,headers:{...U(this.config,t)}})}async setPullRequestLabels(e,t={}){let{pullRequest:r,labels:s}=e;if(!r.repository.project)throw Error('Azure DevOps requires a "project" (name or ID) for this function.');let a=r.labels;if(!a)throw Error('Azure DevOps requires "labels" for this function.');for(let e of s)a.find(t=>t.id===e.id)||await this.addPullRequestLabel({pullRequest:r,label:e},t);for(let e of a)s.find(t=>e.id===t.id)||await this.removePullRequestLabel({pullRequest:r,label:e},t)}async setPullRequestAsDraft(e,t={}){let{pullRequest:r,isDraft:s}=e;if(!(await this.updatePullRequest(r,JSON.stringify({isDraft:s}),t)).body.status)throw Error("Could not set the pull request as draft")}async addPullRequestReviewer(e,t={}){let{pullRequest:r,reviewer:s,isRequired:a}=e,o={id:s.id,isRequired:a};if(!(await this.config.request({method:"PUT",url:`${t.baseUrl||D}/${encodeURIComponent(r.repository.owner.login)}/${encodeURIComponent(r.repository.project)}/_apis/git/repositories/${r.repository.name}/pullrequests/${r.id}/reviewers/${s.id}?api-version=6.0`,body:JSON.stringify(o),headers:{...U(this.config,t),"Content-Type":"application/json"}})).body.id)throw Error("Could not add pull request reviewer")}async removePullRequestReviewer(e,t={}){let{pullRequest:r,reviewer:s}=e;await this.config.request({method:"DELETE",url:`${t.baseUrl||D}/${encodeURIComponent(r.repository.owner.login)}/${encodeURIComponent(r.repository.project)}/_apis/git/repositories/${r.repository.name}/pullrequests/${r.id}/reviewers/${s.id}?api-version=6.0`,headers:{...U(this.config,t),Accept:"application/json"}})}async setPullRequestReviewers(e,t={}){let{pullRequest:r,reviewers:s}=e;for(let e of s)r.assignees.find(t=>t.id===e.id)||await this.addPullRequestReviewer({pullRequest:r,reviewer:e,isRequired:!0},t);for(let e of r.assignees)s.find(t=>e.id===t.id)||await this.removePullRequestReviewer({pullRequest:r,reviewer:e},t)}async getIssuesForAzureProject(e,t={}){let{page:r,assigneeLogins:s,authorLogin:a,mentionLogin:o,statusByWorkItemIdByStatusId:i}=e||{},n=r||1,l=["[Microsoft.VSTS.Common.ClosedDate] = ''","[System.TeamProject] = @project","[Microsoft.VSTS.Common.ResolvedDate] = ''"];a&&l.push(`[System.CreatedBy] = '${a.replace("'","''")}'`),s&&s[0]&&l.push(`[System.AssignedTo] = '${s[0].replace("'","''")}'`),o&&l.push("[System.Id] IN (@recentMentions)");let u=`Select [Microsoft.VSTS.Common.ClosedDate], [Microsoft.VSTS.Common.ResolvedDate] From WorkItems Where ${l.join(" AND ")} order by [System.CreatedDate] desc`,d=await this.config.request({url:`${t.baseUrl||D}/${encodeURIComponent(e.namespace)}/${encodeURIComponent(e.project)}/_apis/wit/wiql?api-version=6.0`,body:JSON.stringify({query:u}),method:"POST",headers:{...U(this.config,t),"Content-Type":"application/json"}}),p=d.body.workItems.slice((n-1)*200,200*n).map(e=>e.id);if(0==p.length)return{pageInfo:{hasNextPage:!1,nextPage:null},data:[]};let c=await this.config.request({url:`${t.baseUrl||D}/${encodeURIComponent(e.namespace)}/${encodeURIComponent(e.project)}/_apis/wit/workitemsbatch?api-version=6.0`,body:JSON.stringify({ids:p,$expand:"Links"}),method:"POST",headers:{...U(this.config,t),"Content-Type":"application/json"}});return{pageInfo:{hasNextPage:d.body.workItems.length>200*n,nextPage:n+1},data:c.body.value.map(t=>k(e.namespace,e.project,t,i||{}))}}async updateIssue(e,t,r={}){return await this.config.request({method:"PATCH",url:`${r.baseUrl||D}/${encodeURIComponent(e.project.namespace)}/${encodeURIComponent(e.project.name)}/_apis/wit/workitems/${e.id}?api-version=6.0`,body:JSON.stringify(t),headers:{...U(this.config,r),"Content-Type":"application/json-patch+json"}})}async setIssueStatus(e,t={}){var r;let{issue:s,status:a}=e,o=[{op:"add",path:"/fields/System.State",value:a.name}];if(!(null!=(r=(await this.updateIssue(s,o,t)).body.fields)&&r["System.State"]))throw Error("Could not set issue status")}async setIssueAssignee(e,t={}){var r;let{issue:s,assignee:a}=e,o=[{op:"add",path:"/fields/System.AssignedTo",value:(null==a?void 0:a.name)??""}];if(!(null!=(r=(await this.updateIssue(s,o,t)).body.fields)&&r["System.State"]))throw Error("Could not set issue assignee")}async setIssueLabels(e,t={}){var r;let{issue:s,labels:a}=e,o=[{op:"replace",path:"/fields/System.Tags",value:a.map(e=>e.name).join(";")}];if(!(null!=(r=(await this.updateIssue(s,o,t)).body.fields)&&r["System.Tags"]))throw Error("Could not set issue tags")}async getIssueTypesForAzureProject(e,t={}){if(!e.project)throw Error('Azure DevOps requires a "project" (name or ID) for this function.');let{namespace:r,project:s}=e;return{data:(await this.config.request({url:`${t.baseUrl||D}/${encodeURIComponent(r)}/${encodeURIComponent(s||"")}/_apis/wit/workitemtypes?api-version=6.0`,headers:{...U(this.config,t)}})).body.value}}async getLabelsForProject(e,t={}){let{namespace:r,project:s}=e;return{data:(await this.config.request({url:`${t.baseUrl||D}/${encodeURIComponent(r)}/${encodeURIComponent(s||"")}/_apis/wit/tags?api-version=6.0`,headers:{...U(this.config,t)}})).body.value.map(e=>({color:null,description:null,id:e.id,name:e.name,url:e.url}))}}},O=(e,t={})=>$(t.token||e.token,t.isPAT||e.isPAT),G="https://api.bitbucket.org/2.0",_={OPEN:"OPEN",MERGED:"MERGED",DECLINED:"CLOSED"},x=e=>({id:e.uuid,name:e.display_name||e.nickname,username:e.nickname||e.display_name,email:null,avatarUrl:e.links.avatar.href,url:e.links.html.href}),M=e=>{var t,r;return{id:e.uuid,namespace:e.workspace.slug,name:e.slug,webUrl:e.links.html.href,httpsUrl:(null==(t=e.links.clone.find(e=>"https"===e.name))?void 0:t.href)??null,sshUrl:(null==(r=e.links.clone.find(e=>"ssh"===e.name))?void 0:r.href)??null,defaultBranch:{name:e.mainbranch.name},permission:null}},B=e=>{let t=e.id;return{id:t.toString(),title:e.title,number:t,state:_[e.state],isDraft:!1,commentCount:e.comment_count,upvoteCount:null,author:x(e.author),createdDate:new Date(e.created_on),updatedDate:new Date(e.updated_on),closedDate:null,mergedDate:null,repository:{id:e.destination.repository.uuid,name:e.destination.repository.name,owner:{login:e.destination.repository.full_name.split("/")[0]},remoteInfo:null},headCommit:{buildStatuses:null},baseRef:{name:e.destination.branch.name,oid:e.destination.commit.hash},headRef:{name:e.source.branch.name,oid:e.source.commit.hash},url:e.links.html.href,assignees:null,reviews:null,reviewDecision:null,additions:null,deletions:null,fileCount:null,commitCount:null,headRepository:null,mergeableState:"UNKNOWN",permissions:null}},H=class extends w{async refreshToken(e){return{data:(await this.config.request({url:"https://bitbucket.org/site/oauth2/access_token",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${e.base64ClientIDColonClientSecret}`},body:`grant_type=refresh_token&refresh_token=${e.refreshToken}`})).body}}async getCurrentUser(e={},t={}){return{data:x((await this.config.request({url:`${G}/user`,headers:O(this.config,t)})).body)}}async getUserForCommit(e,t={}){var r;let s=(await this.config.request({url:`${G}/repositories/${e.repo.namespace}/${e.repo.name}/commit/${e.oid}`,headers:O(this.config,t)})).body.author,a=s.raw.match(/([^<]+)<(.+)>/);return{data:{name:a?a[1].trim():null,email:a?a[2]:null,avatarUrl:(null==(r=s.user)?void 0:r.links.avatar.href)||null}}}async getRepo(e,t={}){return{data:M((await this.config.request({url:`${G}/repositories/${e.namespace}/${e.name}`,headers:O(this.config,t)})).body)}}async getRepos(e,t={}){let r=[],s=[];return await Promise.all(e.map(async e=>{try{let s=await this.getRepo(e,t);r.push(s.data)}catch(t){s.push({input:e,error:t})}})),{data:r,errors:s}}async getReposForCurrentUser(e={},t={}){let r=new URL(`${G}/repositories`);r.searchParams.set("role","member"),r.searchParams.set("pagelen","100"),e.cursor&&r.searchParams.set("after",e.cursor);let s=await this.config.request({url:r.toString(),headers:O(this.config,t)}),a=!!s.body.next,o=null;return s.body.next&&(o=new URL(s.body.next).searchParams.get("after")),{pageInfo:{hasNextPage:a,endCursor:o},data:s.body.values.map(M)}}async getBranches(e,t={}){var r;let s=new URL(`${G}/repositories/${e.repo.namespace}/${e.repo.name}/refs/branches`);s.searchParams.set("page",(null==(r=e.page)?void 0:r.toString())||"1"),s.searchParams.set("pagelen","100");let a=await this.config.request({url:s.toString(),headers:O(this.config,t)}),o=!!a.body.next;return{pageInfo:{hasNextPage:o,nextPage:o?a.body.page+1:null},data:a.body.values.map(e=>{let t=new Date(e.target.date);return{name:e.name,commit:{oid:e.target.hash,authoredDate:t,committedDate:t}}})}}async getTags(e,t={}){let r=new URL(`${G}/repositories/${e.repo.namespace}/${e.repo.name}/refs/tags`);r.searchParams.set("pagelen","100"),e.cursor&&r.searchParams.set("page",e.cursor);let s=await this.config.request({url:r.toString(),headers:O(this.config,t)}),a=!!s.body.next,o=null;return s.body.next&&(o=new URL(s.body.next).searchParams.get("page")),{pageInfo:{hasNextPage:a,endCursor:o},data:s.body.values.map(e=>{let t=new Date(e.target.date);return{name:e.name,commit:{oid:e.target.hash,authoredDate:t,committedDate:t}}})}}async getPullRequestsForUser(e,t={}){var r;let s=new URL(`${G}/pullrequests/${e.userId}`);s.searchParams.set("page",(null==(r=e.page)?void 0:r.toString())||"1"),s.searchParams.set("pagelen","50");let a=await this.config.request({url:s.toString(),headers:O(this.config,t)}),o=!!a.body.next;return{pageInfo:{hasNextPage:o,nextPage:o?a.body.page+1:null},data:a.body.values.map(B)}}async getPullRequestsForRepoBase(e,t={}){var r;let s=new URL(`${G}/repositories/${encodeURI(e.repo.namespace)}/${encodeURI(e.repo.name)}/pullrequests?state=OPEN`);return s.searchParams.set("page",(null==(r=e.page)?void 0:r.toString())||"1"),s.searchParams.set("pagelen","50"),await this.config.request({url:s.toString(),headers:O(this.config,t)})}async getPullRequestsForRepo(e,t={}){let r=[],s=await this.getPullRequestsForRepoBase(e,t);s.body.values.forEach(t=>{if(e.authorLogin&&t.author.uuid!==e.authorLogin)return null;r.push(B(t))});let a=!!s.body.next;return{pageInfo:{hasNextPage:a,nextPage:a?s.body.page+1:null},data:r}}async getPullRequestsForRepos(e,t={}){let r=[];return await Promise.all(e.repos.map(async s=>{try{(await this.getPullRequestsForRepoBase({repo:s,...e},t)).body.values.forEach(t=>{if(e.authorLogin&&t.author.uuid!==e.authorLogin)return null;r.push(B(t))})}catch(e){if(404!==e.statusCode&&401!==e.statusCode)throw e}})),{data:r}}async closePullRequest(e,t={}){let{pullRequest:r}=e;if(!(await this.config.request({method:"POST",url:`${G}/repositories/${r.repository.owner.login}/${r.repository.name}/pullrequests/${r.id}/decline`,headers:O(this.config,t)})).body.title)throw Error("Could not close pull request")}async mergePullRequest(e,t={}){let{pullRequest:r,mergeStrategy:s}=e,a;switch(s){case"MERGE_COMMIT":a="merge_commit";break;case"FAST_FORWARD":a="fast_forward";break;case"SQUASH":a="squash"}let o={merge_strategy:a,type:"pullrequest"};if(!(await this.config.request({method:"POST",url:`${G}/repositories/${r.repository.owner.login}/${r.repository.name}/pullrequests/${r.id}/merge`,body:JSON.stringify(o),headers:{...O(this.config,t),"Content-Type":"application/json"}})).body.title)throw Error("Could not merge pull request")}async setPullRequestReviewers(e,t={}){let{pullRequest:r,reviewers:s}=e,a={reviewers:s.map(e=>{if(e.username)throw Error('Bitbucket reviewer requires "username" for this function.');return{username:e.username}})};if(!(await this.config.request({method:"PUT",url:`${G}/repositories/${r.repository.owner.login}/${r.repository.name}/pullrequests/${r.id}`,body:JSON.stringify(a),headers:{...O(this.config,t),"Content-Type":"application/json"}})).body.title)throw Error("Could not set pull request reviewers")}},z=e=>({name:e.displayName,email:e.emailAddress,avatarUrl:null,id:e.id.toString(),username:e.name,url:e.links.self[0].href}),J=e=>{var t,r,s,a,o,i;let n={UNAPPROVED:"REVIEW_REQUESTED",NEEDS_WORK:"CHANGES_REQUESTED",APPROVED:"APPROVED"},l=e.reviewers.map(e=>({reviewer:z(e.user),state:n[e.status]})),u=(null==(t=e.toRef.repository.links.clone.find(e=>"ssh"===e.name))?void 0:t.href)??null,d=(null==(r=e.toRef.repository.links.clone.find(e=>"https"===e.name))?void 0:r.href)??null;d||(d=(null==(s=e.toRef.repository.links.clone.find(e=>"http"===e.name))?void 0:s.href)??null);let p=(null==(a=e.fromRef.repository.links.clone.find(e=>"ssh"===e.name))?void 0:a.href)??null,c=(null==(o=e.fromRef.repository.links.clone.find(e=>"https"===e.name))?void 0:o.href)??null;return c||(c=(null==(i=e.fromRef.repository.links.clone.find(e=>"http"===e.name))?void 0:i.href)??null),{id:e.id.toString(),number:e.id,title:e.title,url:e.links.self[0].href,state:({OPEN:"OPEN",MERGED:"MERGED",DECLINED:"CLOSED"})[e.state],isDraft:!1,createdDate:new Date(e.createdDate),updatedDate:new Date(e.updatedDate),closedDate:e.closedDate?new Date(e.closedDate):null,mergedDate:"MERGED"==e.state&&e.closedDate?new Date(e.closedDate):null,baseRef:{name:e.toRef.displayId,oid:e.toRef.latestCommit},headRef:{name:e.fromRef.displayId,oid:e.fromRef.latestCommit},commentCount:e.properties.commentCount,upvoteCount:null,commitCount:null,fileCount:null,additions:null,deletions:null,author:z(e.author.user),assignees:null,reviews:l,reviewDecision:f(l),repository:{id:e.toRef.repository.id.toString(),name:e.toRef.repository.name,owner:{login:e.toRef.repository.project.key},remoteInfo:d&&u?{cloneUrlHTTPS:d,cloneUrlSSH:u}:null},headRepository:{id:e.fromRef.repository.id.toString(),name:e.fromRef.repository.name,owner:{login:e.fromRef.repository.project.key},remoteInfo:c&&p?{cloneUrlHTTPS:c,cloneUrlSSH:p}:null},headCommit:null,mergeableState:"UNKNOWN",permissions:null,version:e.version}},W=class extends q{getBaseUrl(e){let t=e.baseUrl||this.config.baseUrl;if(!t)throw Error('Bitbucket Server requires "baseUrl"');return t}getRequestHeaders(e){return $(e.token||this.config.token)}async getRepo(e,t={}){var r,s,a;let o=await this.config.request({url:`${this.getBaseUrl(t)}/projects/${e.namespace}/repos/${e.name}`,headers:this.getRequestHeaders(t)});return{data:{id:o.body.id.toString(),namespace:o.body.project.key,name:o.body.slug,webUrl:(null==(r=o.body.links.self[0])?void 0:r.href)??null,httpsUrl:(null==(s=o.body.links.clone.find(e=>"https"===e.name))?void 0:s.href)??null,sshUrl:(null==(a=o.body.links.clone.find(e=>"ssh"===e.name))?void 0:a.href)??null,defaultBranch:null,permission:null}}}async getRepos(e,t={}){let r=[],s=[];return await Promise.all(e.map(async e=>{try{let s=await this.getRepo(e,t);r.push(s.data)}catch(t){s.push({input:e,error:t})}})),{data:r,errors:s}}async getPullRequestsForRepoBase(e,t={}){var r;let s=new URL(`${this.getBaseUrl(t)}/projects/${encodeURI(e.repo.namespace)}/repos/${encodeURI(e.repo.name)}/pull-requests?state=OPEN`);return s.searchParams.set("start",(null==(r=e.page)?void 0:r.toString())||"0"),s.searchParams.set("limit","50"),await this.config.request({url:s.toString(),headers:this.getRequestHeaders(t)})}async getPullRequestsForRepo(e,t={}){let r=[],s=await this.getPullRequestsForRepoBase(e,t);s.body.values.forEach(t=>{if(e.authorLogin&&t.author.user.name!==e.authorLogin)return null;r.push(J(t))});let a=0!==s.body.values.length;return{pageInfo:{hasNextPage:a,nextPage:a?s.body.start+s.body.values.length:null},data:r}}async getPullRequestsForRepos(e,t={}){let r=[];return await Promise.all(e.repos.map(async s=>{try{(await this.getPullRequestsForRepoBase({repo:s,...e},t)).body.values.forEach(t=>{if(e.authorLogin&&t.author.user.name!==e.authorLogin)return null;r.push(J(t))})}catch(e){if(404!==e.statusCode&&401!==e.statusCode)throw e}})),{data:r}}async getPullRequestsForCurrentUser(e,t={}){var r;let s=new URL(`${this.getBaseUrl(t)}/dashboard/pull-requests`);s.searchParams.set("state","OPEN"),s.searchParams.set("start",(null==(r=e.page)?void 0:r.toString())||"0"),s.searchParams.set("limit","50");let a=await this.config.request({url:s.toString(),headers:this.getRequestHeaders(t)}),o=0!==a.body.values.length;return{pageInfo:{hasNextPage:o,nextPage:o?a.body.start+a.body.values.length:null},data:a.body.values.map(J)}}async closePullRequest(e,t={}){let{pullRequest:r}=e;if(void 0===r.version)throw Error('Bitbucket Server requires "version" for this function.');if(!(await this.config.request({method:"POST",url:`${this.getBaseUrl(t)}/projects/${r.repository.owner.login}/repos/${r.repository.name}/pull-requests/${r.id}/decline`,body:JSON.stringify({version:r.version}),headers:{...this.getRequestHeaders(t),"Content-Type":"application/json"}})).body.title)throw Error("Could not close pull request")}async mergePullRequest(e,t={}){let{pullRequest:r,mergeStrategyId:s}=e;if(e.mergeStrategy)throw Error('Bitbucket Server uses "mergeStrategyId" instead of "mergeStrategy".');if(void 0===r.version)throw Error('Bitbucket Server requires "version" for this function.');if(!(await this.config.request({method:"POST",url:`${this.getBaseUrl(t)}/projects/${r.repository.owner.login}/repos/${r.repository.name}/pull-requests/${r.id}/merge`,body:JSON.stringify({strategyId:s,version:r.version}),headers:{...this.getRequestHeaders(t),"Content-Type":"application/json"}})).body.title)throw Error("Could not merge pull request")}async getMergeStrategies(e={}){let t=await this.config.request({url:`${this.getBaseUrl(e)}/admin/pull-requests/git`,headers:{...this.getRequestHeaders(e),"Content-Type":"application/json"}});return{data:{defaultStrategy:t.body.mergeConfig.defaultStrategy,strategies:t.body.mergeConfig.strategies}}}async setPullRequestReviewers(e,t={}){let{pullRequest:r,reviewers:s}=e;if(void 0===r.version)throw Error('Bitbucket Server requires "version" for this function.');let a={reviewers:s.map(e=>{if(e.username)throw Error('Bitbucket Server reviewer requires "username" for this function.');return{user:{name:e.username}}}),version:r.version};if(!(await this.config.request({method:"PUT",url:`${this.getBaseUrl(t)}/projects/${r.repository.owner.login}/repos/${r.repository.name}/pull-requests/${r.id}`,body:JSON.stringify(a),headers:{...this.getRequestHeaders(t),"Content-Type":"application/json"}})).body.title)throw Error("Could not set pull request reviewers")}},V={AS_CODE_OWNER:[3,0,0],CHECK_RUN:[3,0,0],LATEST_REVIEWS:[3,0,0],VIEWER_CAN_MERGE_AS_ADMIN:[3,5,0]},K=(e,t)=>{let r=V[t];for(let t=0;t<3&&!(e[t]>r[t]);t++)if(e[t]<r[t])return!1;return!0},Y="https://api.github.com",X=`${Y}/graphql`,Z=`
description
dueOn
id
number
state
title
url
`,ee=`
... on CheckRun {
  completedAt
  conclusion
  name
  status
  permalink
  startedAt
}
`,et=/\/api\/v\d+$/,er=`
color
description
id
name
`,es=e=>{if(e.endsWith("/api/graphql"))throw Error("The graphql endpoint is being used as the baseUrl. This package uses both GraphQL and REST APIs, and the REST version cannot be assumed. Use the REST endpoint as the baseUrl instead.")},ea=(e,t)=>{let r=t.baseUrl||e.baseUrl;return r?(es(r=r.replace(/\/$/,"")),et.test(r)&&(r=r.replace(et,"")),`${r}/api/graphql`):X},eo=(e,t)=>{let r=t.baseUrl||e.baseUrl;return r?(es(r=r.replace(/\/$/,"")),et.test(r)&&(r=r.replace(et,"")),`${r}/api/v3`):Y},ei=(e,t,r)=>{let s=$(r.token||e.token);return s["X-Github-Next-Global-ID"]="1",s["Content-Type"]="application/json",s.Accept="application/vnd.github.merge-info-preview+json",e.request({url:ea(e,r),method:"POST",headers:s,body:JSON.stringify(t)})},en={user:!0,"user:email":!0,"read:user":!0},el=e=>e.some(e=>en[e]),eu=(e=!1,t=!1,r)=>`
__typename
${E(r,["graphQLId"],"id")}
${E(r,["id"],"databaseId")}
${E(r,["name"],"name")}
${E(r,["name","username"],"login")}
${t?E(r,["email"],"email"):""}
${E(r,["avatarUrl"],`avatarUrl${e?"(size: $avatarSize)":""}`)}
${E(r,["url"],"url")}
`,ed=(e=!1)=>`
latestReviews(first: 100) {
  nodes {
    author {
      ... on User {
        ${eu(!1,e)}
      }
    }
    state
  }
}
`,ep=(e=!1)=>`
__typename
id
databaseId
login
avatarUrl${e?"(size: $avatarSize)":""}
url
`,ec=(e,t=!1,r)=>`
id
databaseId
number
title
state
author {
  ... on User {
    ${eu(!1,t)}
  }
  ... on Bot {
    ${ep(!1)}
  }
}
commits(last: 1) {
  totalCount
  nodes {
    commit {
      ... on Commit {
        oid
        statusCheckRollup {
          contexts(first: 100) {
            totalCount
nodes {
  ${!r||K(r,"CHECK_RUN")?ee:""}
  ... on StatusContext {
    context
    createdAt
    description
    state
    targetUrl
  }
}
          }
        }
      }
    }
  }
}
baseRef {
  name
  target {
    oid
  }
}
headRef {
  name
  target {
    oid
  }
}
repository {
  id
  databaseId
  name
  owner {
    login
  }
  url
  sshUrl
  viewerPermission
}
headRepository {
  id
  databaseId
  name
  owner {
    login
  }
  url
  sshUrl
}
${e?"isDraft":""}
url
createdAt
comments {
  totalCount
}
reactions(content: THUMBS_UP) {
  totalCount
}
updatedAt
closedAt
mergedAt
assignees(first: 100) {
  nodes {
    ${eu(!1,t)}
  }
}
reviewRequests(first: 100) {
  nodes {
    ${!r||K(r,"AS_CODE_OWNER")?"asCodeOwner":""}
    requestedReviewer {
      ... on User {
        ${eu(!1,t)}
      }
    }
  }
}
${!r||K(r,"LATEST_REVIEWS")?ed(t):""}
additions
deletions
changedFiles
mergeable
mergeStateStatus
milestone {
  ${Z}
}
labels(first: 100) {
  nodes {
    ${er}
  }
}
${!r||K(r,"VIEWER_CAN_MERGE_AS_ADMIN")?"viewerCanMergeAsAdmin":""} 
`,eh=(e=!1)=>`
id
databaseId
title
author {
  ... on User {
    ${eu(!1,e)}
  }
  ... on Bot {
    ${ep(!1)}
  }
}
closedAt
createdAt
number
updatedAt
url
reactions(content: THUMBS_UP) {
  totalCount
}
repository {
  databaseId
  id
  name
  owner {
    login
  }
}
comments {
  totalCount
}
assignees(first: 100) {
  nodes {
    ${eu(!1,e)}
  }
}
state
milestone {
  ${Z}
}
labels(first: 100) {
  nodes {
    ${er}
  }
}
`,eg={"-linked":"-linked",archived:"archived",assignee:"assignee",author:"author",base:"base",closed:"closed",commenter:"commenter",comments:"comments",created:"created",draft:"draft",head:"head",label:"label",language:"language",linked:"linked",in:"in",interactions:"interactions",involves:"involves",is:"is",mentions:"mentions",merged:"merged",milestone:"milestone",no:"no",org:"org",project:"project",reactions:"reactions",repo:"repo",review:"review","reviewed-by":"reviewed-by","review-requested":"review-requested",state:"state",status:"status",team:"team","team-review-requested":"team-review-requested",type:"type",updated:"updated",user:"user","user-review-requested":"user-review-requested"},em=RegExp('(([^\\s]+:)?\\"(?:[^\\"\\\\]|\\\\.)*\\"?)|([^\\"\\s]+)',"g"),ef=e=>{let t=[];return(e.match(em)??[]).forEach(e=>{e.includes(":")&&"is:closed"!=e&&eg[e.split(":")[0]]&&t.push(e)}),t},ey=(e,t,r,s,a=!1,o=null)=>{let i="issue"===e;return{query:`
query SearchIssuesOrPullRequests($query: String! $after: String) {
  search(type:ISSUE query:$query first:100 after:$after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      ... on ${i?"Issue":"PullRequest"} {
        ${i?eh(s):ec(a,s,o)}
      }
    }
  }
}`,variables:{query:`is:${e} is:open ${t}`,after:r}}},ev=(e=[])=>e.some(e=>(null==e?void 0:e.message)==="Field 'isDraft' doesn't exist on type 'PullRequest'"),eR=/@@ -(\d+)(?:,\d+ | )\+(\d+)(?:,\d+ | )@@(?:\\n)?/,eb=`
\\ No newline at end of file
+`,eI=(e,t,r,s)=>{let a=eR.exec(e);if(!a||!a[0]||!a[1])return[];let o=parseInt(a[1],10),i=parseInt(a[2],10),n=e.replace(eb,`
+`).split(`
`).slice(1),l=o-1,u=i-1,d=n.map(e=>{let t,r;switch(e[0]){case"-":t="DELETED",l+=1,r=`${e.slice(1)}
`;break;case"+":t="ADDED",u+=1,r=`${e.slice(1)}
`;break;default:t="UNMODIFIED",u+=1,l+=1,r=`${e}
`}return{line:r,oldLineNumber:"ADDED"!==t?l:null,newLineNumber:"DELETED"!==t?u:null,type:t}});if(null!==r&&null!==t&&null!==s&&r<t){let e=0,a=d.length,o="LEFT"===s?"oldLineNumber":"newLineNumber";for(let s=0;s<d.length;s++){let i=d[s][o];i===r?e=s:i===t&&(a=s)}d=d.slice(e,a+1)}return d},ew=`
id
databaseId
owner {
  login
}
name
url
sshUrl
defaultBranchRef {
  name
}
viewerPermission
`,eq={__typename:"User",id:"U_kgDNJ5k",databaseId:10137,name:"Deleted user",login:"ghost",email:"",avatarUrl:"https://avatars.githubusercontent.com/u/10137?v=4",url:"https://github.com/ghost"},e$={APPROVED:"APPROVED",CHANGES_REQUESTED:"CHANGES_REQUESTED",COMMENTED:"COMMENTED",REVIEW_REQUESTED:"REVIEW_REQUESTED"},eP={MERGEABLE:"MERGEABLE",CONFLICTING:"CONFLICTS",UNKNOWN:"UNKNOWN"},eE={BEHIND:"BEHIND",BLOCKED:"BLOCKED",UNKNOWN:"UNKNOWN_AND_BLOCKED",UNSTABLE:"UNSTABLE",CLEAN:null,DIRTY:null,DRAFT:null,HAS_HOOKS:null},eU={OPEN:"OPEN",CLOSED:"CLOSED"},eS=["ADMIN","MAINTAIN","TRIAGE","WRITE"],eC=e=>({color:e.color,description:e.description,graphQLId:e.id,id:null,name:e.name}),eD=e=>({id:e.databaseId.toString(),graphQLId:e.id,namespace:e.owner.login,name:e.name,webUrl:e.url,httpsUrl:e.url.endsWith(".git")?e.url:`${e.url}.git`,sshUrl:e.sshUrl,defaultBranch:e.defaultBranchRef,permission:e.viewerPermission}),eL={OPEN:"OPEN",CLOSED:"CLOSED",MERGED:"MERGED"},eA={id:!0,graphQLId:!0,name:!0,username:!0,email:!0,avatarUrl:!0,url:!0},eF=(e,t=eA)=>{let r={};return t.id&&(r.id=e.databaseId.toString()),t.graphQLId&&(r.graphQLId=e.id),t.name&&(r.name=e.name??e.login),t.username&&(r.username=e.login),t.email&&(r.email=e.email??null),t.avatarUrl&&(r.avatarUrl=e.avatarUrl),t.url&&(r.url=e.url),r},eN=(e,t)=>"COMPLETED"!==e?({IN_PROGRESS:"RUNNING",PENDING:"PENDING",QUEUED:"PENDING",REQUESTED:"PENDING",WAITING:"PENDING"})[e]:({ACTION_REQUIRED:"ACTION_REQUIRED",CANCELLED:"CANCELLED",FAILURE:"FAILED",NEUTRAL:null,SKIPPED:"SKIPPED",STALE:"FAILED",STARTUP_FAILURE:"FAILED",SUCCESS:"SUCCESS",TIMED_OUT:"ERROR"})[t],eT=e=>({ERROR:"ERROR",EXPECTED:"PENDING",FAILURE:"FAILED",PENDING:"PENDING",SUCCESS:"SUCCESS"})[e],ej=e=>{var t,r,s,a,o,i,n,l,u,d,p;let c=null;e.author?(e.author.__typename,c=e.author):c=eq;let h=((null==(t=e.reviewRequests)?void 0:t.nodes)||[]).filter(e=>!e.asCodeOwner),g=null==(r=e.headRepository)?void 0:r.url;g&&!g.endsWith(".git")&&(g=`${g}.git`);let m=null==(s=e.repository)?void 0:s.url;m&&!m.endsWith(".git")&&(m=`${m}.git`);let y=h.filter(e=>e.requestedReviewer&&"__typename"in e.requestedReviewer).map(e=>({reviewer:eF(e.requestedReviewer),state:"REVIEW_REQUESTED"})).concat(((null==(a=e.latestReviews)?void 0:a.nodes)||[]).map(e=>({reviewer:eF(e.author||eq),state:e$[e.state]})));return{id:e.databaseId.toString(),graphQLId:e.id,title:e.title,number:e.number,state:eL[e.state],commentCount:e.comments.totalCount,upvoteCount:e.reactions.totalCount,author:c?eF(c):null,createdDate:new Date(e.createdAt),isDraft:e.isDraft,repository:{id:e.repository.databaseId,graphQLId:e.repository.id,name:e.repository.name,owner:{login:e.repository.owner.login},remoteInfo:{cloneUrlHTTPS:m,cloneUrlSSH:e.repository.sshUrl}},headRepository:e.headRepository?{id:e.headRepository.databaseId,graphQLId:e.headRepository.id,name:e.headRepository.name,owner:{login:e.headRepository.owner.login},remoteInfo:{cloneUrlHTTPS:g,cloneUrlSSH:e.headRepository.sshUrl}}:null,headCommit:{buildStatuses:(null==(n=null==(i=null==(o=e.commits.nodes)?void 0:o[0].commit.statusCheckRollup)?void 0:i.contexts.nodes)?void 0:n.map(e=>"context"in e?{completedAt:null,description:e.description,name:e.context,state:eT(e.state),startedAt:new Date(e.createdAt),stage:null,url:e.targetUrl}:{completedAt:e.completedAt?new Date(e.completedAt):null,description:null,name:e.name,state:eN(e.status,e.conclusion),startedAt:e.startedAt?new Date(e.startedAt):null,stage:null,url:e.permalink}))??[]},headRef:e.headRef?{name:e.headRef.name,oid:(null==(l=e.headRef.target)?void 0:l.oid)??null}:null,baseRef:e.baseRef?{name:e.baseRef.name,oid:(null==(u=e.baseRef.target)?void 0:u.oid)??null}:null,url:e.url,updatedDate:new Date(e.updatedAt),closedDate:e.closedAt?new Date(e.closedAt):null,mergedDate:e.mergedAt?new Date(e.mergedAt):null,assignees:e.assignees.nodes?e.assignees.nodes.map(e=>eF(e)):null,reviews:y,reviewDecision:f(y),additions:e.additions,deletions:e.deletions,fileCount:e.changedFiles,commitCount:e.commits.totalCount,mergeableState:eE[e.mergeStateStatus]??eP[e.mergeable],milestone:e.milestone?eG(e.milestone):null,labels:(null==(p=null==(d=e.labels)?void 0:d.nodes)?void 0:p.map(eC))??[],permissions:{canMerge:eS.includes(e.repository.viewerPermission),canMergeAndBypassProtections:e.viewerCanMergeAsAdmin??!1}}},ek=e=>{let{comments:t,isOutdated:r,isResolved:s,originalLine:a,originalStartLine:o,startDiffSide:i}=e,{author:n,body:l,databaseId:u,id:d,path:p,publishedAt:c,url:h}=t.nodes[0];return{author:n?{avatarUrl:n.avatarUrl,email:null,name:n.login}:null,body:l,createdAt:c?new Date(c):null,diffLines:eI(t.nodes[0].diffHunk,a,o,i),id:u,isOutdated:r,isResolved:s,graphQLId:d,filename:p,replies:t.nodes.slice(1).map(eQ),url:h}},eQ=e=>({author:e.author?{avatarUrl:e.author.avatarUrl,email:null,name:e.author.login}:null,body:e.body,createdAt:e.publishedAt?new Date(e.publishedAt):null,graphQLId:e.id,id:e.databaseId,url:e.url}),eO=e=>{var t,r;let s=null;return e.author?(e.author.__typename,s=e.author):s=eq,{id:e.databaseId.toString(),graphQLId:e.id,number:e.number,title:e.title,author:eF(s),commentCount:e.comments.totalCount,closedDate:e.closedAt?new Date(e.closedAt):null,createdDate:new Date(e.createdAt),description:null,state:{name:eU[e.state],color:null},type:null,repository:{id:e.repository.databaseId,graphQLId:e.repository.id,name:e.repository.name,owner:{login:e.repository.owner.login}},url:e.url,updatedDate:new Date(e.updatedAt),assignees:e.assignees.nodes?e.assignees.nodes.map(e=>eF(e)):[],upvoteCount:e.reactions.totalCount,milestone:e.milestone?eG(e.milestone):null,labels:(null==(r=null==(t=e.labels)?void 0:t.nodes)?void 0:r.map(eC))??[]}},eG=e=>({id:e.number.toString(),graphQLId:e.id.toString(),number:e.number,title:e.title,description:e.description,isOpen:"OPEN"==e.state,url:e.url,startDate:null,dueDate:e.dueOn?new Date(e.dueOn):null}),e_=class extends q{constructor(){super(...arguments),this._scopesCache={},this._enterpriseVersionsCache={}}async getScopes(e){let t=e.token||this.config.token;if(!t)return[];let r=this._scopesCache[t];if(!r){let s=(await ei(this.config,{query:"query { rateLimit(dryRun: true) { __typename } }"},e)).headers["x-oauth-scopes"];r=s?s.split(", "):[],this._scopesCache[t]=r}return r}async getEnterpriseVersion(e){let t=e.baseUrl||this.config.baseUrl;if(!t)return null;let r=this._enterpriseVersionsCache[t];if(!r){let s=await this.config.request({url:`${eo(this.config,e)}/meta`,headers:$(e.token||this.config.token)});if(!s.body.installed_version)return null;r=s.body.installed_version.split(".").slice(0,3).map(e=>parseInt(e,10)),this._enterpriseVersionsCache[t]=r}return r}getEnterpriseAvatarUrlIfNeeded(e,t,r){let s=r.baseUrl||this.config.baseUrl;return!s||s.startsWith(Y)?e:t?`https://avatars.githubusercontent.com/u/e?email=${encodeURIComponent(t)}`:""}async getCurrentUser(e={},t={}){var r;if(e.fields&&!e.fields.length)throw Error('"fields" must contain at least one field or be omitted');let s=P(e.fields),a=await this.getScopes(t),o=null==(r=(await ei(this.config,{query:`
query getCurrentUser {
  viewer {
    ${eu(!1,el(a),s)}
  }
}
`},t)).body.data)?void 0:r.viewer;if(!o)throw Error("Current user not found.");return{data:eF(o,s)}}async getAccountsForRepo(e,t={}){var r,s,a,o,i,n;let l=await this.getScopes(t),{repo:{namespace:u,name:d},cursor:p}=e,c=await ei(this.config,{query:`
query getAccountsForRepo($owner: String!, $name: String! $cursor: String, $first: Int!) {
  repository(owner: $owner, name: $name) {
    assignableUsers(first: $first, after: $cursor) {
      nodes {
        ${eu(!1,el(l))}
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
`,variables:{owner:u,name:d,cursor:p,first:100}},t);if(!c.body.data)throw Error((null==(r=c.body.errors)?void 0:r[0].message)||c.statusText||"Unknown error");return{pageInfo:(null==(a=null==(s=c.body.data.repository)?void 0:s.assignableUsers)?void 0:a.pageInfo)??{endCursor:null,hasNextPage:!1},data:(null==(n=null==(i=null==(o=c.body.data.repository)?void 0:o.assignableUsers)?void 0:i.nodes)?void 0:n.map(e=>eF(e)))??[]}}async getUserForCommit(e,t={}){var r,s;let a=null==(r=(await ei(this.config,{query:`
query getUserForCommit(
  $owner: String!
  $name: String!
  $oid: GitObjectID!
  $avatarSize: Int
) {
  repository(owner: $owner, name: $name) {
    object(oid: $oid) {
      ... on Commit {
        author {
          name
          email
          avatarUrl(size: $avatarSize)
        }
      }
    }
  }
}
`,variables:{owner:e.repo.namespace,name:e.repo.name,oid:e.oid,avatarSize:e.avatarSize}},t)).body.data)?void 0:r.repository;if(!a)throw Error("Repository not found.");let o=null==(s=a.object)?void 0:s.author;if(!o)throw Error("Commit not found.");return{data:{name:o.name,email:o.email,avatarUrl:this.getEnterpriseAvatarUrlIfNeeded(o.avatarUrl,o.email,t)}}}async getAccountForEmail(e,t={}){var r,s,a;let o=await this.getScopes(t),i=null==(a=null==(s=null==(r=(await ei(this.config,{query:`
query getAccountForEmail($query: String! $avatarSize: Int) {
  search(query: $query, type: USER, first: 1) {
    nodes {
      ... on User {
        ${eu(!0,el(o))}
      }
    }
  }
}
`,variables:{query:`in:email ${e.email}`,avatarSize:e.avatarSize}},t)).body.data)?void 0:r.search)?void 0:s.nodes)?void 0:a[0];if(!i)throw Error("User not found.");return{data:eF({...i,avatarUrl:this.getEnterpriseAvatarUrlIfNeeded(i.avatarUrl,i.email,t)})}}async getAccountForUsername(e,t={}){var r;let s=await this.getScopes(t),a=null==(r=(await ei(this.config,{query:`
query getUserForUsername($login: String! $avatarSize: Int) {
  user(login: $login) {
    ${eu(!0,el(s))}
  }
}
`,variables:{login:e.username,avatarSize:e.avatarSize}},t)).body.data)?void 0:r.user;if(!a)throw Error("User not found.");return{data:eF({...a,avatarUrl:this.getEnterpriseAvatarUrlIfNeeded(a.avatarUrl,a.email,t)})}}async getOrgsForCurrentUser(e={},t={}){var r,s;let a=await ei(this.config,{query:`
query getOrgsForCurrentUser($cursor: String, $first: Int!) {
  viewer {
    organizations(first: $first after: $cursor) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        id
        databaseId
        name
        login
        email
        avatarUrl
      }
    }
  }
}
`,variables:{cursor:e.cursor,first:100}},t);if(!(null!=(r=a.body.data)&&r.viewer.organizations))throw Error((null==(s=a.body.errors)?void 0:s[0].message)||a.statusText||"Unknown error");let o=a.body.data.viewer.organizations.nodes||[];return{pageInfo:a.body.data.viewer.organizations.pageInfo,data:o.map(e=>({id:e.databaseId.toString(),graphQLId:e.id,username:e.login,name:e.name||null,email:e.email||null,avatarUrl:e.avatarUrl}))}}async getRepo(e,t={}){var r;let s=await ei(this.config,{query:`
query getRepo($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    ${ew}
  }
}
`,variables:{owner:e.namespace,name:e.name}},t);if(!(null!=(r=s.body.data)&&r.repository))throw Error(`Repository ${e.namespace}/${e.name} not found`);return{data:eD(s.body.data.repository)}}async getRepos(e,t={}){let r=e.map(({namespace:e,name:t},r)=>`
      getRepo_${r}: repository(owner: "${e}", name: "${t}") {
        ${ew}
      }
    `).join(`
`),s=await ei(this.config,{query:`
query batchGetRepos {
  ${r}
}
`},t);if(!s.body.data)throw Error(s.statusText||"Unknown error");let a=[],o=[];return e.forEach((e,t)=>{let r=s.body.data[`getRepo_${t}`];r?a.push(eD(r)):o.push({input:e})}),{data:a,errors:o}}async getReposForUsernames(e,t={}){var r;if(!e.usernames.length)return{pageInfo:{endCursor:null,hasNextPage:!1},data:[]};let s=await ei(this.config,{query:`
query getReposForUsernames($query: String!, $cursor: String, $first: Int!) {
  search(query: $query, type: REPOSITORY, first: $first, after: $cursor) {
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      ... on Repository {
        ${ew}
      }
    }
  }
}
`,variables:{query:`fork:true ${e.usernames.map(e=>`user:${e}`).join(" ")}`,cursor:e.cursor,first:100}},t);if(!s.body.data)throw Error((null==(r=s.body.errors)?void 0:r[0].message)||s.statusText||"Unknown error");let a=s.body.data.search.nodes||[];return{pageInfo:s.body.data.search.pageInfo,data:a.map(eD)}}async getReposForOwners(e,t={}){return this.getReposForUsernames({usernames:e.owners.filter(e=>e.username).map(e=>e.username),cursor:e.cursor},t)}async getRefs(e,t,r={}){var s;let a=null==(s=(await ei(this.config,{query:`
query getRefs($owner: String!, $name: String!, $refPrefix: String!, $cursor: String, $first: Int!) {
  repository(owner: $owner, name: $name) {
    refs(refPrefix: $refPrefix first: $first after: $cursor) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        name
        target {
          ... on Commit {
            oid
            authoredDate
            committedDate
          }
        }
      }
    }
  }
}
`,variables:{owner:t.repo.namespace,name:t.repo.name,refPrefix:e,cursor:t.cursor,first:100}},r)).body.data)?void 0:s.repository;if(!a)throw Error("Repository not found.");let o=a.refs;return o?{pageInfo:o.pageInfo,data:(o.nodes||[]).map(e=>{var t;let r=null!=(t=e.target)&&t.oid?e.target:null;return{name:e.name,commit:r?{oid:r.oid,authoredDate:new Date(r.authoredDate),committedDate:new Date(r.committedDate)}:null}})}:{pageInfo:{endCursor:null,hasNextPage:!1},data:[]}}async getBranches(e,t={}){return this.getRefs("refs/heads/",e,t)}async getTags(e,t={}){return this.getRefs("refs/tags/",e,t)}async getBlame(e,t={}){var r;let s=null==(r=(await ei(this.config,{query:`
query getBlame($owner: String!, $name: String!, $ref: String!, $path: String!) {
  repository(owner: $owner, name: $name) {
    object(expression: $ref) {
      ... on Commit {
        blame(path: $path) {
          ranges {
            startingLine
            endingLine
            commit {
              oid
              parents(first:100) {
                nodes {
                  oid
                }
              }
              authoredDate
              committedDate
              message
              author {
                name
                email
                avatarUrl
              }
              committer {
                name
                email
                avatarUrl
              }
              additions
              deletions
              changedFilesIfAvailable
            }
          }
        }
      }
    }
  }
}
`,variables:{owner:e.repo.namespace,name:e.repo.name,ref:e.ref,path:e.path}},t)).body.data)?void 0:r.repository;if(!s)throw Error("Repository not found.");let a=s.object;if(!a||!("blame"in a))throw Error("Ref not found.");if(0===a.blame.ranges.length)throw Error("File not found.");return{data:{ranges:a.blame.ranges.map(e=>{var t;return{startingLine:e.startingLine,endingLine:e.endingLine,commit:{oid:e.commit.oid,parentOids:(null==(t=e.commit.parents.nodes)?void 0:t.map(e=>e.oid))||[],authoredDate:new Date(e.commit.authoredDate),author:e.commit.author?{name:e.commit.author.name,email:e.commit.author.email,avatarUrl:e.commit.author.avatarUrl}:null,committedDate:new Date(e.commit.committedDate),committer:e.commit.committer?{name:e.commit.committer.name,email:e.commit.committer.email,avatarUrl:e.commit.committer.avatarUrl}:null,message:e.commit.message,fileCount:e.commit.changedFilesIfAvailable,additions:e.commit.additions,deletions:e.commit.deletions}}})}}}async getFileContents(e,t={}){let r=await this.config.request({url:`${eo(this.config,t)}/repos/${e.repo.namespace}/${e.repo.name}/contents/${encodeURIComponent(e.path)}?ref=${e.ref}`,headers:{...$(t.token||this.config.token),Accept:"application/vnd.github.raw+json"}});if(r.headers["content-type"].startsWith("application/json"))throw Error(`GitHub: got directory when fetching "${e.path}", getFileContents does not support fetching directories`);if(!r.headers["content-type"].startsWith("application/vnd.github.raw+json"))throw Error(`GitHub: unsupported content type "${r.headers["content-type"]}" when fetching "${e.path}"`);return{data:new Blob([r.body])}}async searchPullRequests(e,t={}){var r,s;let a=await this.getEnterpriseVersion(t),o=el(await this.getScopes(t)),i=t=>ey("pr",t&&"boolean"==typeof e.isDraft?`${e.query} draft:${e.isDraft}`:e.query,e.cursor,o,t,a),n=await ei(this.config,i(!0),t);n.body.errors&&ev(n.body.errors)&&(this.config.baseUrl||t.baseUrl)&&(n=await ei(this.config,i(!1),t));let{data:l}=n.body;if(!l)throw Error((null==(r=n.body.errors)?void 0:r[0].message)||n.statusText||"Unknown error");return{pageInfo:{hasNextPage:l.search.pageInfo.hasNextPage,endCursor:l.search.pageInfo.endCursor},data:(null==(s=l.search.nodes)?void 0:s.map(ej))||[]}}async searchIssues(e,t={}){var r,s;let a=el(await this.getScopes(t)),o=await ei(this.config,ey("issue",e.query,e.cursor,a),t),{data:i}=o.body;if(!i)throw Error((null==(r=o.body.errors)?void 0:r[0].message)||o.statusText||"Unknown error");return{pageInfo:{hasNextPage:i.search.pageInfo.hasNextPage,endCursor:i.search.pageInfo.endCursor},data:(null==(s=i.search.nodes)?void 0:s.map(eO))||[]}}async getPullRequestsAssociatedWithUser(e,t={}){return this.searchPullRequests({query:`involves:${e.username}`,cursor:e.cursor},t)}async getPullRequestsForRepos(e,t={}){let{assigneeLogins:r,updatedBefore:s,authorLogin:a,repos:o,reviewRequestedLogin:i,startQuery:n,mentionLogin:l}=e,u=ef(n||"");return o.forEach(e=>{u.push(`repo:${e.namespace}/${e.name}`)}),r&&r.forEach(e=>{u.push(`assignee:${e}`)}),s&&u.push(`updated:<${s}`),a&&u.push(`author:${a}`),i&&u.push(`review-requested:${i}`),l&&u.push(`mentions:${l}`),this.searchPullRequests({query:`sort:updated ${u.join(" ")}`,isDraft:e.isDraft,cursor:e.cursor},t)}async getPullRequestForRepo(e,t={}){var r,s;let a=await this.getEnterpriseVersion(t),o=el(await this.getScopes(t)),i=t=>({query:`query getPullRequest(
  $owner: String!
  $name: String!
  $number: Int!
) {
  repository(
    owner: $owner,
    name: $name
  ) {
    pullRequest(number: $number) {
      ${ec(t,o,a)}
    }
  }
}`,variables:{owner:e.repo.namespace,name:e.repo.name,number:e.number}}),n=await ei(this.config,i(!0),t);n.body.errors&&ev(n.body.errors)&&(this.config.baseUrl||t.baseUrl)&&(n=await ei(this.config,i(!1),t));let{data:l}=n.body;if(!l)throw Error((null==(r=n.body.errors)?void 0:r[0].message)||n.statusText||"Unknown error");let u=null==(s=n.body.data)?void 0:s.repository.pullRequest;return{data:u?ej(u):null}}async getPullRequestByGraphQLId(e,t={}){var r,s;let a=await this.getEnterpriseVersion(t),o=el(await this.getScopes(t)),i=t=>({query:`query getPullRequest(
  $graphQLId: ID!
) {
  node(id: $graphQLId) {
    ... on PullRequest {
      ${ec(t,o,a)}
    }
  }
}`,variables:{graphQLId:e.graphQLId}}),n=await ei(this.config,i(!0),t);n.body.errors&&ev(n.body.errors)&&(this.config.baseUrl||t.baseUrl)&&(n=await ei(this.config,i(!1),t));let{data:l}=n.body;if(!l)throw Error((null==(r=n.body.errors)?void 0:r[0].message)||n.statusText||"Unknown error");let u=null==(s=n.body.data)?void 0:s.node;return{data:u?ej(u):null}}async closePullRequest(e,t={}){var r,s,a;let{pullRequest:{graphQLId:o}}=e;if(!o)throw Error('GitHub requires "graphQLId" for this function.');let i=`mutation ClosePullRequest($pullRequestGraphQLId: ID!) {
  closePullRequest(input: { pullRequestId: $pullRequestGraphQLId }) {
    pullRequest {
      id
    }
  }
}`;if(!(null!=(a=null==(s=null==(r=(await ei(this.config,{query:`${i}`,variables:{pullRequestGraphQLId:o}},t)).body.data)?void 0:r.closePullRequest)?void 0:s.pullRequest)&&a.id))throw Error("Could not close pull request")}async mergePullRequest(e,t={}){var r,s,a,o;let i;let{pullRequest:n,mergeStrategy:l}=e;if(!n.graphQLId)throw Error('GitHub requires "graphQLId" for this function.');if(!(null!=(r=n.headRef)&&r.oid))throw Error('GitHub requires "headRef.oid" for this function.');switch(l){case"MERGE_COMMIT":i="MERGE";break;case"REBASE":i="REBASE";break;case"SQUASH":i="SQUASH"}let u=`mutation MergePullRequest(
  $pullRequestGraphQLId: ID!,
  $expectedSourceSha: GitObjectID!,
  $mergeStrategy: PullRequestMergeMethod,
) {
  mergePullRequest(input: {
    pullRequestId: $pullRequestGraphQLId,
    expectedHeadOid: $expectedSourceSha,
    mergeMethod: $mergeStrategy,
  }) {
    pullRequest {
      id
    }
  }
}`;if(!(null!=(o=null==(a=null==(s=(await ei(this.config,{query:`${u}`,variables:{pullRequestGraphQLId:n.graphQLId,expectedSourceSha:n.headRef.oid,mergeStrategy:i}},t)).body.data)?void 0:s.mergePullRequest)?void 0:a.pullRequest)&&o.id))throw Error("Could not merge pull request")}async setPullRequestMilestone(e,t={}){var r,s,a;let{pullRequest:o,milestone:i}=e;if(!o.graphQLId)throw Error('GitHub requires "graphQLId" for this function.');let n=`mutation SetPullRequestMilestone($pullRequestGraphQLId: ID!, $milestoneGraphQLId: ID) {
  updatePullRequest(input: { pullRequestId: $pullRequestGraphQLId, milestoneId: $milestoneGraphQLId }) {
    pullRequest {
      id
    }
  }
}`;if(!(null!=(a=null==(s=null==(r=(await ei(this.config,{query:`${n}`,variables:{pullRequestGraphQLId:o.graphQLId,milestoneGraphQLId:(null==i?void 0:i.graphQLId)??null}},t)).body.data)?void 0:r.updatePullRequest)?void 0:s.pullRequest)&&a.id))throw Error("Could not set milestone of pull request")}async markPullRequestReadyForReview(e,t){var r,s,a;let o=`mutation MarkReadyToReview($pullRequestGraphQLId: ID!) {
  markPullRequestReadyForReview(input: { pullRequestId: $pullRequestGraphQLId }) {
    pullRequest {
      id
    }
  }
}`;if(!(null!=(a=null==(s=null==(r=(await ei(this.config,{query:o,variables:{pullRequestGraphQLId:e}},t)).body.data)?void 0:r.markPullRequestReadyForReview)?void 0:s.pullRequest)&&a.id))throw Error("Could not mark pull request ready to review")}async convertPullRequestToDraft(e,t){var r,s,a;let o=`mutation ConvertToDraft($pullRequestGraphQLId: ID!) {
  convertPullRequestToDraft(input: { pullRequestId: $pullRequestGraphQLId }) {
    pullRequest {
      id
    }
  }
}`;if(!(null!=(a=null==(s=null==(r=(await ei(this.config,{query:o,variables:{pullRequestGraphQLId:e}},t)).body.data)?void 0:r.convertPullRequestToDraft)?void 0:s.pullRequest)&&a.id))throw Error("Could not convert pull request to draft")}async setPullRequestAsDraft(e,t={}){let{pullRequest:{graphQLId:r},isDraft:s}=e;if(!r)throw Error('GitHub requires "graphQLId" for this function.');if(s){await this.convertPullRequestToDraft(r,t);return}await this.markPullRequestReadyForReview(r,t)}async setPullRequestReviewers(e,t={}){var r,s,a;let{pullRequest:{reviews:o,graphQLId:i},reviewers:n}=e;if(!o)throw Error('GitHub requires "reviews" for this function');if(!i)throw Error('GitHub requires "graphQLId" for this function.');let l=o.filter(e=>"REVIEW_REQUESTED"!==e.state).map(e=>{if(!e.reviewer.graphQLId)throw Error('GitHub requires reviewer "graphQLId" for this function.');return e.reviewer.graphQLId}),u=n.map(e=>{if(!e.graphQLId)throw Error('GitHub requires reviewer "graphQLId" for this function.');return e.graphQLId}).filter(e=>-1===l.indexOf(e)),d=`mutation SetPullRequestReviewers($pullRequestGraphQLId: ID!, $reviewerGraphQLIds: [ID!]!) {
  requestReviews(input: { pullRequestId: $pullRequestGraphQLId, userIds: $reviewerGraphQLIds }) {
    pullRequest {
      id
    }
  }
}`;if(!(null!=(a=null==(s=null==(r=(await ei(this.config,{query:d,variables:{pullRequestGraphQLId:i,reviewerGraphQLIds:u}},t)).body.data)?void 0:r.requestReviews)?void 0:s.pullRequest)&&a.id))throw Error("Could not set pull request reviewers")}async reRequestPullRequestReviews(e,t={}){var r,s,a;let{pullRequest:{reviews:o,graphQLId:i},reviewers:n}=e;if(!i)throw Error('GitHub requires "graphQLId" for this function.');if(!o)throw Error('GitHub requires "reviews" for this function.');let l=[];for(let e of n){if(!e.graphQLId)throw Error('GitHub requires reviwer "graphQLId" for this function.');if(!o.find(t=>t.reviewer.graphQLId===e.graphQLId))throw Error("Can only re-request review from existing reviewer.");l.push(e.graphQLId)}let u=`mutation SetPullRequestReviewers($pullRequestGraphQLId: ID!, $reviewerGraphQLIds: [ID!]!) {
  requestReviews(input: { pullRequestId: $pullRequestGraphQLId, userIds: $reviewerGraphQLIds, union: true }) {
    pullRequest {
      id
    }
  }
}`;if(!(null!=(a=null==(s=null==(r=(await ei(this.config,{query:u,variables:{pullRequestGraphQLId:i,reviewerGraphQLIds:l}},t)).body.data)?void 0:r.requestReviews)?void 0:s.pullRequest)&&a.id))throw Error("Could not re-request pull request reviews")}async setPullRequestAssignees(e,t={}){var r,s,a;let{pullRequest:o,assignees:i}=e;if(!o.graphQLId)throw Error('GitHub requires "graphQLId" for this function.');let n=i.map(e=>{if(!e.graphQLId)throw Error('GitHub requires assignee "graphQLId" for this function.');return e.graphQLId}),l=`mutation SetPullRequestAssignees($pullRequestGraphQLId: ID!, $assigneeGraphQLIds: [ID!]!) {
  updatePullRequest(input: { pullRequestId: $pullRequestGraphQLId, assigneeIds: $assigneeGraphQLIds }) {
    pullRequest {
      id
    }
  }
}`;if(!(null!=(a=null==(s=null==(r=(await ei(this.config,{query:l,variables:{pullRequestGraphQLId:o.graphQLId,assigneeGraphQLIds:n}},t)).body.data)?void 0:r.updatePullRequest)?void 0:s.pullRequest)&&a.id))throw Error("Could not set pull request assignees")}async getReviewsForPullRequest(e,t={}){var r,s;let{repo:{namespace:a,name:o},pullRequestId:i}=e,n=`query getPullRequests(
  $namespace: String!
  $name: String!
  $pullRequestId: Int!
) {
  repository(
    owner: $namespace,
    name: $name
  ) {
    pullRequest(number: $pullRequestId) {
      reviewThreads(first: 100) {
        nodes {
          isOutdated
          isResolved
          originalLine
          originalStartLine
          startDiffSide
          comments(first: 100) {
            nodes {
              author {
                avatarUrl
                login
              }
              body
              databaseId
              diffHunk
              id
              path
              publishedAt
              pullRequestReview {
                id
              }
              url
            }
          }
        }
      }
      reviews(first: 100) {
        nodes {
          author {
            avatarUrl
            login
          }
          body
          databaseId
          id
          publishedAt
          url
        }
      }
    }
  }
}`,l=await ei(this.config,{query:n,variables:{namespace:a,name:o,pullRequestId:i}},t),u=(null==(r=l.body.data)?void 0:r.repository.pullRequest.reviewThreads.nodes.reduce((e,t)=>{let r=t.comments.nodes[0].pullRequestReview;return r&&(e[r.id]||(e[r.id]=[]),e[r.id].push(ek(t))),e},{}))??{};return{data:(null==(s=l.body.data)?void 0:s.repository.pullRequest.reviews.nodes.filter(e=>u[e.id]).map(e=>({author:e.author?{avatarUrl:e.author.avatarUrl,email:null,name:e.author.login}:null,body:e.body,createdAt:e.publishedAt?new Date(e.publishedAt):null,id:e.databaseId,graphQLId:e.id,reviewComments:u[e.id],url:e.url})))??[]}}async getIssuesAssociatedWithUser(e,t={}){var r;let[s,a]=(null==(r=e.cursor)?void 0:r.split(";"))||[void 0,void 0],[o,i]=await Promise.all(["null"===s?null:this.searchIssues({query:`author:${e.username}`,cursor:s},t),"null"===a?null:this.searchIssues({query:`assignee:${e.username}`,cursor:a},t)]),n={},l=[],u=e=>{n[e.id]||(n[e.id]=!0,l.push(e))};return null==o||o.data.forEach(u),null==i||i.data.forEach(u),{pageInfo:{hasNextPage:(null==o?void 0:o.pageInfo.hasNextPage)||(null==i?void 0:i.pageInfo.hasNextPage)||!1,endCursor:`${(null==o?void 0:o.pageInfo.hasNextPage)&&(null==o?void 0:o.pageInfo.endCursor)||"null"};${(null==i?void 0:i.pageInfo.hasNextPage)&&(null==i?void 0:i.pageInfo.endCursor)||"null"}`},data:l}}async setPullRequestLabels(e,t={}){var r,s,a;let{pullRequest:o,labels:i}=e;if(!o.graphQLId)throw Error('GitHub requires "graphQLId" for this function.');let n=`mutation SetPullRequestLabels($pullRequestGraphQLId: ID!, $labelGraphQLIds: [ID!]) {
  updatePullRequest(input: { pullRequestId: $pullRequestGraphQLId, labelIds: $labelGraphQLIds }) {
    pullRequest {
      id
    }
  }
}`;if(!(null!=(a=null==(s=null==(r=(await ei(this.config,{query:n,variables:{pullRequestGraphQLId:o.graphQLId,labelGraphQLIds:i.map(e=>{if(!e.graphQLId)throw Error('GitHub requires label "graphQLId" for this function.');return e.graphQLId})}},t)).body.data)?void 0:r.updatePullRequest)?void 0:s.pullRequest)&&a.id))throw Error("Could not set pull request labels")}async getIssuesForRepos(e,t={}){let r=ef(e.startQuery||""),{cursor:s,assigneeLogins:a,updatedBefore:o,authorLogin:i,mentionLogin:n}=e;return e.repos.forEach(e=>{r.push(`repo:${e.namespace}/${e.name}`)}),a&&a.forEach(e=>{r.push(`assignee:${e}`)}),o&&r.push(`updated:<${o}`),i&&r.push(`author:${i}`),n&&r.push(`mentions:${n}`),this.searchIssues({query:`sort:updated ${r.join(" ")}`,cursor:s},t)}async closeIssueWithReason(e,t={}){var r,s,a;let{issue:o,reason:i}=e;if(!o.graphQLId)throw Error('GitHub requires "graphQLId" for this function.');let n=`mutation CloseIssueWithReason($issueGraphQLId: ID!, $reason: IssueClosedStateReason!) {
  closeIssue(input: { issueId: $issueGraphQLId, stateReason: $reason }) {
    issue {
      id
    }
  }
}`;if(!(null!=(a=null==(s=null==(r=(await ei(this.config,{query:n,variables:{issueGraphQLId:o.graphQLId,reason:i}},t)).body.data)?void 0:r.closeIssue)?void 0:s.issue)&&a.id))throw Error("Could not close issue with reason")}async closeIssue(e,t={}){var r,s,a;let{issue:o}=e;if(!o.graphQLId)throw Error('GitHub requires "graphQLId" for this function.');let i=`mutation SetIssueState($issueGraphQLId: ID!) {
  updateIssue(input: { id: $issueGraphQLId, state: CLOSED }) {
    issue {
      id
    }
  }
}`;if(!(null!=(a=null==(s=null==(r=(await ei(this.config,{query:i,variables:{issueGraphQLId:o.graphQLId}},t)).body.data)?void 0:r.updateIssue)?void 0:s.issue)&&a.id))throw Error("Could not close issue")}async reOpenIssue(e,t={}){var r,s,a;let{issue:o}=e;if(!o.graphQLId)throw Error('GitHub requires "graphQLId" for this function.');let i=`mutation ReOpenIssue($issueGraphQLId: ID!) {
  reopenIssue(input: { issueId: $issueGraphQLId }) {
    issue {
      id
    }
  }
}`;if(!(null!=(a=null==(s=null==(r=(await ei(this.config,{query:i,variables:{issueGraphQLId:o.graphQLId}},t)).body.data)?void 0:r.reopenIssue)?void 0:s.issue)&&a.id))throw Error("Could not reopen issue")}async setIssueLabels(e,t={}){var r,s,a;let{issue:o,labels:i}=e;if(!o.graphQLId)throw Error('GitHub requires "graphQLId" for this function.');let n=i.map(e=>e.graphQLId),l=`mutation SetIssueLabels($issueGraphQLId: ID!, $labelGraphQLIds: [ID!]) {
  updateIssue(input: { id: $issueGraphQLId, labelIds: $labelGraphQLIds }) {
    issue {
      id
    }
  }
}`;if(!(null!=(a=null==(s=null==(r=(await ei(this.config,{query:l,variables:{issueGraphQLId:o.graphQLId,labelGraphQLIds:n}},t)).body.data)?void 0:r.updateIssue)?void 0:s.issue)&&a.id))throw Error("Could not set issue labels")}async setIssueMilestone(e,t={}){var r,s,a;let{issue:o,milestone:i}=e;if(!o.graphQLId)throw Error('GitHub requires "graphQLId" for this function.');if(i&&!i.graphQLId)throw Error('GitHub requires milestone "graphQLId" for this function.');let n=`mutation SetIssueMilestone($issueGraphQLId: ID!, $milestoneGraphQLId: ID) {
  updateIssue(input: { id: $issueGraphQLId, milestoneId: $milestoneGraphQLId }) {
    issue {
      id
    }
  }
}`;if(!(null!=(a=null==(s=null==(r=(await ei(this.config,{query:`${n}`,variables:{issueGraphQLId:o.graphQLId,milestoneGraphQLId:(null==i?void 0:i.graphQLId)??null}},t)).body.data)?void 0:r.updateIssue)?void 0:s.issue)&&a.id))throw Error("Could not set milestone of issue")}async setIssueAssignees(e,t={}){var r,s,a;let{issue:o,assignees:i}=e;if(!o.graphQLId)throw Error('GitHub requires "graphQLId" for this function.');let n=i.map(e=>{if(!e.graphQLId)throw Error('GitHub requires assignee "graphQLId" for this function.');return e.graphQLId}),l=`mutation SetIssueAssignees($issueGraphQLId: ID!, $assigneeGraphQLIds: [ID!]!) {
  updateIssue(input: { id: $issueGraphQLId, assigneeIds: $assigneeGraphQLIds }) {
    issue {
      id
    }
  }
}`;if(!(null!=(a=null==(s=null==(r=(await ei(this.config,{query:l,variables:{issueGraphQLId:o.graphQLId,assigneeGraphQLIds:n}},t)).body.data)?void 0:r.updateIssue)?void 0:s.issue)&&a.id))throw Error("Could not set issue assignees")}async getMilestonesForRepo(e,t={}){var r,s,a,o;let{repo:{namespace:i,name:n},cursor:l}=e,u=await ei(this.config,{query:`
query getLabelsForRepo($owner: String!, $name: String! $cursor: String, $first: Int!) {
  repository(owner: $owner, name: $name) {
    milestones(first: $first, after: $cursor) {
      nodes {
        ${Z}
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
`,variables:{owner:i,name:n,cursor:l,first:100}},t);if(!u.body.data)throw Error((null==(r=u.body.errors)?void 0:r[0].message)||u.statusText||"Unknown error");return{pageInfo:(null==(s=u.body.data.repository.milestones)?void 0:s.pageInfo)??{endCursor:null,hasNextPage:!1},data:(null==(o=null==(a=u.body.data.repository.milestones)?void 0:a.nodes)?void 0:o.map(eG))??[]}}async getLabelsForRepo(e,t={}){var r,s,a,o;let{repo:{namespace:i,name:n},cursor:l}=e,u=await ei(this.config,{query:`
query getLabelsForRepo($owner: String!, $name: String! $cursor: String, $first: Int!) {
  repository(owner: $owner, name: $name) {
    labels(first: $first, after: $cursor) {
      nodes {
        ${er}
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
`,variables:{owner:i,name:n,cursor:l,first:100}},t);if(!u.body.data)throw Error((null==(r=u.body.errors)?void 0:r[0].message)||u.statusText||"Unknown error");return{pageInfo:(null==(s=u.body.data.repository.labels)?void 0:s.pageInfo)??{endCursor:null,hasNextPage:!1},data:(null==(o=null==(a=u.body.data.repository.labels)?void 0:a.nodes)?void 0:o.map(eC))??[]}}},ex=/\/api\/v\d+$/,eM=e=>{if(e.endsWith("/api/graphql"))throw Error("The graphql endpoint is being used as the baseUrl. This package uses both GraphQL and REST APIs, and the REST version cannot be assumed. Use the REST endpoint as the baseUrl instead.")},eB=(e,t)=>{let r=t.baseUrl||e.baseUrl;return r?(eM(r=r.replace(/\/$/,"")),r):"https://gitlab.com/api/v4"},eH=(e,t)=>{let r=t.baseUrl||e.baseUrl;return r?(eM(r=r.replace(/\/$/,"")),ex.test(r)&&(r=r.replace(ex,"")),`${r}/api/graphql`):"https://gitlab.com/api/graphql"},ez=(e,t,r)=>{let s=$(r.token||e.token);return e.request({url:eH(e,r),method:"POST",headers:{...s,"Content-Type":"application/json"},body:JSON.stringify(t)})},eJ=e=>e.split("/").slice(0,-1).join("/"),eW=e=>e.split("/").at(-1)??"",eV=e=>({id:e.id.replace(eZ,""),graphQLId:e.id,namespace:eJ(e.fullPath),name:eW(e.fullPath),webUrl:e.webUrl}),eK=e=>({id:e.id.replace(eZ,""),graphQLId:e.id,httpsUrl:e.httpUrlToRepo,namespace:eJ(e.fullPath),name:eW(e.fullPath),sshUrl:e.sshUrlToRepo,webUrl:e.webUrl}),eY={assigned:"assignedMergeRequests",authored:"authoredMergeRequests",reviewRequested:"reviewRequestedMergeRequests"},eX={CAN_BE_MERGED:"MERGEABLE",CANNOT_BE_MERGED:"CONFLICTS",CANNOT_BE_MERGED_RECHECK:"UNKNOWN",UNCHECKED:"UNKNOWN",CHECKING:"UNKNOWN"},eZ="gid://gitlab/Project/",e0=`
description
dueDate
id
iid
startDate
state
title
webPath
`,e1=`
id
fullPath
webUrl
httpUrlToRepo
sshUrlToRepo
repository {
  rootRef
}
`,e4=`
id
name
username
publicEmail
avatarUrl
webUrl
`,e2=`
color
description
id
title
`,e7=`
author {
  ${e4}
}
assignees {
  nodes {
    ${e4}
  }
}
closedAt
createdAt
description
dueDate
id
iid
labels {
  nodes {
    ${e2}
  }
}
state
title
type
updatedAt
upvotes
userNotesCount
webUrl
milestone {
  ${e0}
}
`,e3=`
stages {
  nodes {
    jobs {
      nodes {
        allowFailure
        createdAt
        finishedAt
        id
        name
        status
      }
    }
    name
  }
}
`,e6=(e,t,r)=>`
id
state
approved
author {
  ${e4}
}
diffRefs {
  baseSha
  headSha
}
diffStatsSummary {
  additions
  deletions
  fileCount
}
commitCount
draft
userNotesCount
upvotes
title
webUrl
createdAt
updatedAt
mergedAt
iid
targetBranch
sourceBranch
assignees {
  nodes {
    ${e4}
  }
}
reviewers {
  nodes {
    ${e4}
    mergeRequestInteraction {
      approved
      reviewState
    }
  }
}
mergeStatusEnum
labels {
  nodes {
    ${e2}
  }
}
${e?"project { id httpUrlToRepo fullPath sshUrlToRepo webUrl } sourceProject { id httpUrlToRepo fullPath sshUrlToRepo webUrl }":""}
${t?`milestone { ${e0} }`:""}
${r?`headPipeline { ${e3} }`:""}
`,e8=e=>`${e.namespace}/${e.name}`,e5=e=>`${e.namespace}/${e.name}`,e9=e=>{var t;return{id:e.id.replace(eZ,""),graphQLId:e.id,namespace:eJ(e.fullPath),name:eW(e.fullPath),webUrl:e.webUrl,httpsUrl:e.httpUrlToRepo,sshUrl:e.sshUrlToRepo,defaultBranch:null!=(t=e.repository)&&t.rootRef?{name:e.repository.rootRef}:null,permission:null}},te={opened:"OPEN",merged:"MERGED",closed:"CLOSED"},tt=(e,t)=>{let r=e.avatarUrl;return!t&&null!=r&&r.startsWith("/")&&(r=`https://gitlab.com${r}`),{id:e.id.replace("gid://gitlab/User/",""),graphQLId:e.id,name:e.name,username:e.username,email:e.publicEmail??null,avatarUrl:r,url:e.webUrl}},tr=e=>({color:e.color,description:e.description,id:e.id.replace("gid://gitlab/ProjectLabel/",""),graphQLId:e.id,name:e.title}),ts=(e,t)=>e?"FAILED"===e&&t?"WARNING":({CANCELED:"CANCELLED",CREATED:"PENDING",FAILED:"FAILED",MANUAL:"OPTIONAL_ACTION_REQUIRED",PENDING:"PENDING",PREPARING:"RUNNING",RUNNING:"RUNNING",SCHEDULED:"PENDING",SKIPPED:"SKIPPED",SUCCESS:"SUCCESS",WAITING_FOR_CALLBACK:"PENDING",WAITING_FOR_RESOURCE:"PENDING"})[e]:null,ta=(e,t,r,s)=>{var a,o,i,n,l,u,d,p,c,h,g,m;let y=null!=(a=e.reviewers)&&a.nodes?e.reviewers.nodes.map(e=>{var t,r;return{reviewer:tt(e,s),state:null!=(t=e.mergeRequestInteraction)&&t.approved?"APPROVED":(null==(r=e.mergeRequestInteraction)||r.reviewState,"CHANGES_REQUESTED")}}):null;return{id:e.id.replace("gid://gitlab/MergeRequest/",""),graphQLId:e.id,title:e.title,number:parseInt(e.iid,10),state:te[e.state],commentCount:e.userNotesCount||0,upvoteCount:e.upvotes,author:e.author?tt(e.author,s):null,createdDate:new Date(e.createdAt),isDraft:e.draft,repository:{id:t.id,graphQLId:t.graphQLId,name:t.name,owner:{login:t.namespace},remoteInfo:t.httpsUrl&&t.sshUrl?{cloneUrlHTTPS:t.httpsUrl,cloneUrlSSH:t.sshUrl}:null},headRepository:r?{id:r.id,graphQLId:r.graphQLId,name:r.name,owner:{login:r.namespace},remoteInfo:{cloneUrlHTTPS:r.httpsUrl,cloneUrlSSH:r.sshUrl}}:null,headCommit:{buildStatuses:(null==(n=null==(i=null==(o=e.headPipeline)?void 0:o.stages)?void 0:i.nodes)?void 0:n.flatMap(e=>{var r,s;return(null==(s=null==(r=e.jobs)?void 0:r.nodes)?void 0:s.map(r=>({completedAt:r.finishedAt?new Date(r.finishedAt):null,description:null,name:r.name??null,state:ts(r.status,r.allowFailure),stage:e.name??null,startedAt:new Date(r.createdAt),url:`${t.webUrl}/-/jobs/${r.id.replace("gid://gitlab/Ci::Build/","")}`})))??[]}))??[]},baseRef:{name:e.targetBranch,oid:(null==(l=e.diffRefs)?void 0:l.baseSha)??null},headRef:{name:e.sourceBranch,oid:(null==(u=e.diffRefs)?void 0:u.headSha)??null},url:e.webUrl,updatedDate:new Date(e.updatedAt),closedDate:e.mergedAt?new Date(e.mergedAt):null,mergedDate:e.mergedAt?new Date(e.mergedAt):null,assignees:null!=(d=e.assignees)&&d.nodes?e.assignees.nodes.map(e=>tt(e,s)):null,reviews:y,reviewDecision:e.approved?"APPROVED":f(y),additions:(null==(p=e.diffStatsSummary)?void 0:p.additions)||0,deletions:(null==(c=e.diffStatsSummary)?void 0:c.deletions)||0,fileCount:(null==(h=e.diffStatsSummary)?void 0:h.fileCount)||0,commitCount:e.commitCount||0,mergeableState:eX[e.mergeStatusEnum],milestone:e.milestone?ti(e.milestone,t.webUrl):null,labels:(null==(m=null==(g=e.labels)?void 0:g.nodes)?void 0:m.map(tr))??[],permissions:null}},to=(e,t,r)=>{var s,a;return{author:tt(e.author,r),assignees:e.assignees.nodes.map(e=>tt(e,r)),commentCount:e.userNotesCount,closedDate:e.closedAt?new Date(e.closedAt):null,createdDate:new Date(e.createdAt),description:e.description,graphQLId:e.id,id:e.id.replace("gid://gitlab/Issue/",""),labels:(null==(a=null==(s=e.labels)?void 0:s.nodes)?void 0:a.map(tr))??[],number:e.iid,repository:{id:t.id.replace(eZ,""),graphQLId:t.id,name:t.name,owner:{login:t.namespace}},updatedDate:new Date(e.updatedAt),upvoteCount:e.upvotes,state:{name:e.state,color:null},type:e.type,title:e.title,url:e.webUrl,milestone:e.milestone?ti(e.milestone,t.webUrl):null}},ti=(e,t)=>({id:e.id.replace("gid://gitlab/Milestone/",""),graphQLId:e.id,number:parseInt(e.iid,10),title:e.title,description:e.description,isOpen:"active"===e.state,url:`${t}/-/${e.webPath.replace(/.+?\/-\//,"")}`,startDate:e.startDate?new Date(e.startDate):null,dueDate:e.dueDate?new Date(e.dueDate):null}),tn=class extends q{getIsSelfHosted(e){return!!e.baseUrl||!!this.config.baseUrl}async getCurrentUser(e={},t={}){var r;let s=null==(r=(await ez(this.config,{query:`
query getCurrentUser {
  currentUser {
    ${e4}
  }
}
`},t)).body.data)?void 0:r.currentUser;if(!s)throw Error("Current user not found.");return{data:tt(s,this.getIsSelfHosted(t))}}async getUserForCommit(e,t={}){var r,s,a,o;let i=e8(e.repo),n=null==(o=null==(a=null==(s=null==(r=(await ez(this.config,{query:`
query getUserForCommit($fullPath: ID!, $oid: String!) {
  project(fullPath: $fullPath) {
    repository {
      tree(ref: $oid) {
        lastCommit {
          authorName
          authorEmail
          authorGravatar
        }
      }
    }
  }
}
`,variables:{fullPath:i,oid:e.oid}},t)).body.data)?void 0:r.project)?void 0:s.repository)?void 0:a.tree)?void 0:o.lastCommit;if(!n)throw Error("Commit not found.");return{data:{name:n.authorName,email:n.authorEmail,avatarUrl:n.authorGravatar}}}async getAccountForEmail(e,t={}){var r,s,a;let o=null==(a=null==(s=null==(r=(await ez(this.config,{query:`
query getAccountForEmail($email: String!) {
  users(search: $email) {
    nodes {
      ${e4}
    }
  }
}
`,variables:{email:e.email}},t)).body.data)?void 0:r.users)?void 0:s.nodes)?void 0:a[0];if(!o)throw Error("User not found.");return{data:tt(o,this.getIsSelfHosted(t))}}async getAccountForUsername(e,t={}){var r;let s=null==(r=(await ez(this.config,{query:`
query getAccountForUsername($username: String!) {
  user(username: $username) {
    ${e4}
  }
}
`,variables:{username:e.username}},t)).body.data)?void 0:r.user;if(!s)throw Error("User not found.");return{data:tt(s,this.getIsSelfHosted(t))}}async getAccountsForRepo(e,t={}){var r,s,a,o,i,n,l;let{repo:{namespace:u,name:d},cursor:p}=e,c=await ez(this.config,{query:`
query getAccountsForRepo(
  $fullPath: ID!
  $after: String
) {
  project(
    fullPath: $fullPath
  ) {
    projectMembers(after: $after) {
      nodes {
        user {
          ${e4}
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
`,variables:{fullPath:`${u}/${d}`,after:p}},t),h=null==(o=null==(a=null==(s=null==(r=c.body.data)?void 0:r.project)?void 0:s.projectMembers)?void 0:a.nodes)?void 0:o.map(e=>e.user).filter(e=>null!==e);return{pageInfo:(null==(l=null==(n=null==(i=c.body.data)?void 0:i.project)?void 0:n.projectMembers)?void 0:l.pageInfo)??{endCursor:null,hasNextPage:!1},data:(null==h?void 0:h.map(e=>tt(e,this.getIsSelfHosted(t))))??[]}}async getRepo(e,t={}){var r;let s=e8(e),a=await ez(this.config,{query:`
query getRepo($fullPath: ID!) {
  project(fullPath: $fullPath) {
    ${e1}
  }
}
`,variables:{fullPath:s}},t);if(!(null!=(r=a.body.data)&&r.project))throw Error(`Repository ${s} not found`);return{data:e9(a.body.data.project)}}async getRepos(e,t={}){let r=e.map(e8).map((e,t)=>`
      getRepo_${t}: project(fullPath: "${e}") {
        ${e1}
      }
    `).join(`
`),s=await ez(this.config,{query:`
query batchGetRepos {
  ${r}
}
`},t);if(!s.body.data)throw Error(s.statusText||"Unknown error");let a=[],o=[];return e.forEach((e,t)=>{let r=s.body.data[`getRepo_${t}`];r?a.push(e9(r)):o.push({input:e})}),{data:a,errors:o}}async getReposForCurrentUser(e={},t={}){var r,s,a,o,i,n;let l=await ez(this.config,{query:`
query getReposForCurrentUser($after: String) {
  projects(membership: true first: 100 after: $after) {
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      ${e1}
    }
  }
}
`,variables:{after:e.cursor}},t);if(!(null!=(r=l.body.data)&&r.projects))throw Error((null==(s=l.body.errors)?void 0:s[0].message)||l.statusText||"Unknown error");let u=(null==(o=null==(a=l.body.data)?void 0:a.projects)?void 0:o.nodes)||[];return{pageInfo:null==(n=null==(i=l.body.data)?void 0:i.projects)?void 0:n.pageInfo,data:u.map(e9)}}async getRefs(e,t,r={}){var s;let a=e8(t.repo),o=new URL(`${eB(this.config,r)}/projects/${encodeURIComponent(a)}/repository/${e}`);o.searchParams.set("page",(null==(s=t.page)?void 0:s.toString())||"1"),o.searchParams.set("per_page","100");let i=await this.config.request({url:o.toString(),headers:$(r.token||this.config.token)}),n=i.headers["x-next-page"];return{pageInfo:{hasNextPage:!!n,nextPage:n?parseInt(n,10):null},data:i.body.map(e=>({name:e.name,commit:{oid:e.commit.id,authoredDate:new Date(e.commit.authored_date),committedDate:new Date(e.commit.committed_date)}}))}}async getBranches(e,t={}){return this.getRefs("branches",e,t)}async getTags(e,t={}){return this.getRefs("tags",e,t)}async getBlame(e,t={}){let r=e8(e.repo),s=new URL(`${eB(this.config,t)}/projects/${encodeURIComponent(r)}/repository/files/${encodeURIComponent(e.path)}/blame`);s.searchParams.set("ref",e.ref);let a=await this.config.request({url:s.toString(),headers:$(t.token||this.config.token)}),o=0;return{data:{ranges:a.body.map(e=>({startingLine:o+1,endingLine:o+=e.lines.length,commit:{oid:e.commit.id,parentOids:e.commit.parent_ids,authoredDate:new Date(e.commit.authored_date),author:{name:e.commit.author_name,email:e.commit.author_email,avatarUrl:null},committedDate:new Date(e.commit.committed_date),committer:{name:e.commit.committer_name,email:e.commit.committer_email,avatarUrl:null},message:e.commit.message,fileCount:null,additions:null,deletions:null}}))}}}async getPullRequestsForUser(e,t={}){var r,s;let a=eY[e.association],o=await ez(this.config,{query:`
query getPullRequestsForUser($username: String! $cursor: String) {
  user(username: $username) {
    ${a}(state:opened first:100 after:$cursor) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        ${e6(!0,!0,!0)}
      }
    }
  }
}
`,variables:{username:e.username,cursor:e.cursor}},t);if(!o.body.data)throw Error((null==(r=o.body.errors)?void 0:r[0].message)||o.statusText||"Unknown error");if(!o.body.data.user)throw Error("User not found");let i=o.body.data.user[a];if(!i)throw Error("Unexpected response");return{pageInfo:i.pageInfo,data:(null==(s=i.nodes)?void 0:s.map(e=>ta(e,eK(e.project),eK(e.sourceProject),this.getIsSelfHosted(t))))||[]}}async getPullRequestsAssociatedWithUser(e,t={}){var r;let[s,a,o]=(null==(r=e.cursor)?void 0:r.split(";"))||[void 0,void 0,void 0],[i,n,l]=await Promise.all(["null"===s?null:this.getPullRequestsForUser({username:e.username,association:"authored",cursor:s},t),"null"===a?null:this.getPullRequestsForUser({username:e.username,association:"assigned",cursor:a},t),"null"===o?null:this.getPullRequestsForUser({username:e.username,association:"reviewRequested",cursor:o},t)]),u={},d=[],p=e=>{u[e.id]||(u[e.id]=!0,d.push(e))};return null==i||i.data.forEach(p),null==n||n.data.forEach(p),null==l||l.data.forEach(p),{pageInfo:{hasNextPage:(null==i?void 0:i.pageInfo.hasNextPage)||(null==n?void 0:n.pageInfo.hasNextPage)||(null==l?void 0:l.pageInfo.hasNextPage)||!1,endCursor:`${(null==i?void 0:i.pageInfo.hasNextPage)&&(null==i?void 0:i.pageInfo.endCursor)||"null"};${(null==n?void 0:n.pageInfo.hasNextPage)&&(null==n?void 0:n.pageInfo.endCursor)||"null"};${(null==l?void 0:l.pageInfo.hasNextPage)&&(null==l?void 0:l.pageInfo.endCursor)||"null"}`},data:d}}getVariablesForPullRequests(e){let{updatedBefore:t,isDraft:r,authorLogin:s,assigneeLogins:a,reviewRequestedLogin:o}=e||{},i={},n=[],l=[],u=(e,t,r)=>{n.push(`$${e}: ${r}`),l.push(`${e}: $${e}`),i[e]=t};return t&&u("updatedBefore",t,"Time"),s&&u("authorUsername",s,"String"),a&&u("assigneeUsername",a[0],"String"),null!=r&&u("draft",r,"Boolean"),o&&u("reviewerUsername",o,"String"),{variables:i,variableTypes:n,mergeRequestArguments:l}}async getPullRequestsForRepo(e,t={}){var r,s,a;let{cursor:o,repo:i}=e||{},n=e8(i),{variables:l,variableTypes:u,mergeRequestArguments:d}=this.getVariablesForPullRequests(e),p={fullPath:n,...l},c=await ez(this.config,{query:`
query getPullRequestsForRepo(
  $fullPath: ID!
  $after: String
  ${u.length?u.join(" "):""}
) {
  project(
    fullPath: $fullPath
  ) {
    id
    fullPath
    webUrl
    mergeRequests(
      first: 100
      state: opened
      sort: UPDATED_DESC
      after: $after
      ${d.length?d.join(" "):""}
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        ${e6(!1,!0,!0)}
      }
    }
  }
}
`,variables:{...p,after:o}},t),h=[],g=null==(r=c.body.data)?void 0:r.project,m=eV(g||{id:"",fullPath:"",webUrl:""});return((null==(s=null==g?void 0:g.mergeRequests)?void 0:s.nodes)||[]).forEach(e=>{h.push(ta(e,m,null,this.getIsSelfHosted(t)))}),{pageInfo:null==(a=null==g?void 0:g.mergeRequests)?void 0:a.pageInfo,data:h}}async getPullRequestsForRepos(e,t={}){var r,s,a,o,i;let{cursor:n}=e||{},l=e.repoIds.map(e=>e.toString().startsWith(eZ)?e:`${eZ}${e}`),{variables:u,variableTypes:d,mergeRequestArguments:p}=this.getVariablesForPullRequests(e),c={projectIds:l,...u},h=await ez(this.config,{query:`
query getPullRequests(
  $projectIds: [ID!]
  $after: String
  ${d.length?d.join(" "):""}
) {
  projects(
    ids: $projectIds
    after: $after
  ) {
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      id
      fullPath
      webUrl
      mergeRequests(
        first: 100
        state: opened
        sort: UPDATED_DESC
        ${p.length?p.join(" "):""}
      ) {
        nodes {
          ${e6(!1,!1,!1)}
        }
      }
    }
  }
}
`,variables:{...c,after:n}},t),g=[];return((null==(s=null==(r=h.body.data)?void 0:r.projects)?void 0:s.nodes)||[]).forEach(e=>{var r;let s=eV(e);((null==(r=e.mergeRequests)?void 0:r.nodes)||[]).forEach(e=>{g.push(ta(e,s,null,this.getIsSelfHosted(t)))})}),{pageInfo:null==(i=null==(o=null==(a=h.body)?void 0:a.data)?void 0:o.projects)?void 0:i.pageInfo,data:g}}async closePullRequest(e,t={}){var r,s,a;let{pullRequest:o}=e,i=`mutation ClosePullRequest($fullPath: ID!, $pullRequestId: String!) {
  mergeRequestUpdate(input: { projectPath: $fullPath, iid: $pullRequestId, state: CLOSED }) {
    errors,
    mergeRequest {
      id
    }
  }
}`,n=null==(r=(await ez(this.config,{query:i,variables:{fullPath:`${o.repository.owner.login}/${o.repository.name}`,pullRequestId:o.number.toString()}},t)).body.data)?void 0:r.mergeRequestUpdate;if(!(null!=(s=null==n?void 0:n.mergeRequest)&&s.id)||(null==(a=null==n?void 0:n.errors)?void 0:a.length)!==0)throw Error("Could not close pull request")}async mergePullRequest(e,t={}){var r,s,a,o;let{pullRequest:i,mergeStrategy:n}=e;if(!(null!=(r=i.headRef)&&r.oid))throw Error('GitLab requires "headRef.oid" for this function.');let l=`mutation MergePullRequest(
  $fullPath: ID!,
  $pullRequestId: String!,
  $expectedSourceSha: String!,
  $squash: Boolean!,
) {
  mergeRequestAccept(input: {
    projectPath: $fullPath,
    iid: $pullRequestId,
    sha: $expectedSourceSha,
    squash: $squash,
}) {
    errors,
    mergeRequest {
      id
    }
  }
}`,u=null==(s=(await ez(this.config,{query:l,variables:{fullPath:`${i.repository.owner.login}/${i.repository.name}`,pullRequestId:i.number.toString(),expectedSourceSha:i.headRef.oid,squash:"SQUASH"===n}},t)).body.data)?void 0:s.mergeRequestAccept;if(!(null!=(a=null==u?void 0:u.mergeRequest)&&a.id)||(null==(o=null==u?void 0:u.errors)?void 0:o.length)!==0)throw Error("Could not merge pull request")}async setPullRequestMilestone(e,t={}){var r,s,a;let{pullRequest:o,milestone:i}=e;if(!o.graphQLId)throw Error('GitHub requires "graphQLId" for this function.');let n=`mutation SetPullRequestMilestone($fullPath: ID!, $pullRequestId: String!, $milestoneGraphQLId: MilestoneID) {
  mergeRequestSetMilestone(input: { projectPath: $fullPath, iid: $pullRequestId, milestoneId: $milestoneGraphQLId }) {
    errors,
    mergeRequest {
      id
    }
  }
}`,l=await ez(this.config,{query:n,variables:{fullPath:`${o.repository.owner.login}/${o.repository.name}`,pullRequestId:o.number.toString(),milestoneGraphQLId:null==i?void 0:i.graphQLId}},t),u=null==(r=l.body.data)?void 0:r.mergeRequestSetMilestone;if(!(null!=(s=null==u?void 0:u.mergeRequest)&&s.id)||l.body.errors||(null==(a=null==u?void 0:u.errors)?void 0:a.length)!==0)throw Error("Could not set milestone of pull request")}async setPullRequestAsDraft(e,t={}){var r,s,a;let{pullRequest:o,isDraft:i}=e,n=`mutation MergeRequestSetDraft($fullPath: ID!, $pullRequestId: String!, $isDraft: Boolean!) {
  mergeRequestSetDraft(input: { projectPath: $fullPath, iid: $pullRequestId, draft: $isDraft }) {
      errors,
      mergeRequest {
        id
      }
    }
  }`,l=null==(r=(await ez(this.config,{query:n,variables:{fullPath:`${o.repository.owner.login}/${o.repository.name}`,pullRequestId:o.number.toString(),isDraft:i}},t)).body.data)?void 0:r.mergeRequestSetDraft;if(!(null!=(s=null==l?void 0:l.mergeRequest)&&s.id)||(null==(a=null==l?void 0:l.errors)?void 0:a.length)!==0)throw Error("Could not set pull request as draft")}async setPullRequestReviewers(e,t={}){var r,s,a;let{pullRequest:o,reviewers:i}=e,n=i.map(e=>{if(!e.username)throw Error('GitLab requires reviewer "username" for this function.');return e.username}),l=`mutation MergeRequestSetReviewers($fullPath: ID!, $pullRequestId: String!, $reviewerUsernames: [String!]!) {
  mergeRequestSetReviewers(input: { projectPath: $fullPath, iid: $pullRequestId, reviewerUsernames: $reviewerUsernames }) {
      errors,
      mergeRequest {
        id
      }
    }
  }`,u=null==(r=(await ez(this.config,{query:l,variables:{fullPath:`${o.repository.owner.login}/${o.repository.name}`,pullRequestId:o.number.toString(),reviewerUsernames:n}},t)).body.data)?void 0:r.mergeRequestSetReviewers;if(!(null!=(s=null==u?void 0:u.mergeRequest)&&s.id)||(null==(a=null==u?void 0:u.errors)?void 0:a.length)!==0)throw Error("Could not set pull request reviewers")}async reRequestPullRequestReview(e,t={}){var r,s,a;let{pullRequest:o,reviewer:i}=e;if(!i.graphQLId)throw Error('GitLab requires reviwer "graphQLId" for this function.');let n=`mutation MergeRequestReviewerRereview($fullPath: ID!, $pullRequestId: String!, $reviewerUserId: UserID!) {
  mergeRequestReviewerRereview(input: { projectPath: $fullPath, iid: $pullRequestId, userId: $reviewerUserId }) {
      errors,
      mergeRequest {
        id
      }
    }
  }`,l=null==(r=(await ez(this.config,{query:n,variables:{fullPath:`${o.repository.owner.login}/${o.repository.name}`,pullRequestId:o.number.toString(),reviewerUserId:i.graphQLId}},t)).body.data)?void 0:r.mergeRequestReviewerRereview;if(!(null!=(s=null==l?void 0:l.mergeRequest)&&s.id)||(null==(a=null==l?void 0:l.errors)?void 0:a.length)!==0)throw Error("Could not set pull request reviewers")}async reRequestPullRequestReviews(e,t={}){let{pullRequest:r,reviewers:s}=e,a=r.reviews;if(!a)throw Error('GitLab requires "reviews" for this function.');let o=s.filter(e=>a.find(t=>t.reviewer.graphQLId===e.graphQLId));await Promise.all(o.map(e=>this.reRequestPullRequestReview({pullRequest:r,reviewer:e},t)))}async setPullRequestAssignees(e,t={}){var r,s,a;let{pullRequest:o,assignees:i}=e,n=i.map(e=>{if(!e.username)throw Error('GitLab requires assignee "username" for this function.');return e.username}),l=`mutation MergeRequestSetAssignees($fullPath: ID!, $pullRequestId: String!, $assigneeUsernames: [String!]!) {
  mergeRequestSetAssignees(input: { projectPath: $fullPath, iid: $pullRequestId, assigneeUsernames: $assigneeUsernames }) {
    errors,
    mergeRequest {
      id
    }
  }
}`,u=null==(r=(await ez(this.config,{query:l,variables:{fullPath:`${o.repository.owner.login}/${o.repository.name}`,pullRequestId:o.number.toString(),assigneeUsernames:n}},t)).body.data)?void 0:r.mergeRequestSetAssignees;if(!(null!=(s=null==u?void 0:u.mergeRequest)&&s.id)||(null==(a=null==u?void 0:u.errors)?void 0:a.length)!==0)throw Error("Could not set pull request assignees")}async setPullRequestLabels(e,t={}){var r,s,a;let{pullRequest:o,labels:i}=e,n=i.map(e=>{if(!e.graphQLId)throw Error('GitLab requires "graphQLId" for labels in this function.');return e.graphQLId}),l=`mutation SetPullRequestLabels($fullPath: ID!, $pullRequestId: String!, $labelGraphQLIds: [LabelID!]!) {
  mergeRequestSetLabels(input: { projectPath: $fullPath, iid: $pullRequestId, labelIds: $labelGraphQLIds }) {
    mergeRequest {
      id
    }
  }
}`;if(!(null!=(a=null==(s=null==(r=(await ez(this.config,{query:l,variables:{fullPath:`${o.repository.owner.login}/${o.repository.name}`,pullRequestId:o.number.toString(),labelGraphQLIds:n}},t)).body.data)?void 0:r.mergeRequestSetLabels)?void 0:s.mergeRequest)&&a.id))throw Error("Could not set pull request labels")}async getIssue(e,t={}){var r,s,a;let o=e5(e),i=await ez(this.config,{query:`
query GetSingleIssue($projectId: ID!, $issueNumber: String!) {
  project(fullPath: $projectId) {
    id
    fullPath
    webUrl
    issue(iid: $issueNumber) {
      ${e7}
    }
  }
}
`,variables:{issueNumber:e.number,projectId:o}},t);if(!(null!=(r=i.body.data)&&r.project))throw Error(`Repository ${o} not found`);if(!(null!=(a=null==(s=i.body.data)?void 0:s.project)&&a.issue))throw Error(`Issue ${e.number} not found`);return{data:to(i.body.data.project.issue,eV(i.body.data.project),this.getIsSelfHosted(t))}}getVariablesForIssues(e){let{updatedBefore:t,authorLogin:r,assigneeLogins:s}=e||{},a={},o=[],i=[],n=(e,t,r)=>{o.push(`$${e}: ${r}`),i.push(`${e}: $${e}`),a[e]=t};return t&&n("updatedBefore",t,"Time"),r&&n("authorUsername",r,"String"),s&&n("assigneeUsername",s[0],"String"),{variables:a,variableTypes:o,issueArguments:i}}async getIssuesForRepo(e,t={}){var r,s,a;let{cursor:o,repo:i}=e||{},n=e8(i),{variables:l,variableTypes:u,issueArguments:d}=this.getVariablesForIssues(e),p={fullPath:n,...l},c=`
      query GetIssuesFromProject(
        $fullPath: ID!
        $after: String
        ${u.length?u.join(" "):""}
      ) {
        project(
          fullPath: $fullPath
        ) {
          id
          fullPath
          webUrl
          issues(
            first: 100
            state: opened
            sort: UPDATED_DESC
            after: $after
            ${d.length?d.join(" "):""}
          ) {
            nodes {
              ${e7}
            }
            pageInfo {
              endCursor
              hasNextPage
            }
          }
        }
      }`,h=await ez(this.config,{query:c,variables:{...p,after:o}},t),g=[],m=null==(r=h.body.data)?void 0:r.project,f=eV(m||{id:"",fullPath:"",webUrl:""});return((null==(s=null==m?void 0:m.issues)?void 0:s.nodes)||[]).forEach(e=>{g.push(to(e,f,this.getIsSelfHosted(t)))}),{pageInfo:(null==(a=null==m?void 0:m.issues)?void 0:a.pageInfo)??{endCursor:null,hasNextPage:!1},data:g.sort((e,t)=>(e.updatedDate||e.createdDate).getTime()-(t.updatedDate||t.createdDate).getTime())}}async getIssuesForRepos(e,t={}){var r,s,a,o,i;let{cursor:n}=e||{},l=e.repoIds.map(e=>e.toString().startsWith(eZ)?e:`${eZ}${e}`),{variables:u,variableTypes:d,mergeRequestArguments:p}=this.getVariablesForPullRequests(e),c={projectIds:l,...u},h=`
      query GetIssuesFromProject(
        $projectIds: [ID!]
        $after: String
        ${d.length?d.join(" "):""}
        ) {
        projects(
          ids: $projectIds
          after: $after
        ) {
          pageInfo {
            endCursor
            hasNextPage
          }
          nodes {
            id
            fullPath
            webUrl
            issues(
              first: 100
              state: opened
              sort: UPDATED_DESC
              ${p.length?p.join(" "):""}
            ) {
              nodes {
                ${e7}
              }
            }
          }
        }
      }`,g=await ez(this.config,{query:h,variables:{...c,after:n}},t),m=[];return((null==(s=null==(r=g.body.data)?void 0:r.projects)?void 0:s.nodes)||[]).forEach(e=>{var r;let s=eV(e);((null==(r=e.issues)?void 0:r.nodes)||[]).forEach(e=>m.push(to(e,s,this.getIsSelfHosted(t))))}),{pageInfo:(null==(i=null==(o=null==(a=g.body)?void 0:a.data)?void 0:o.projects)?void 0:i.pageInfo)??{endCursor:null,hasNextPage:!1},data:m.sort((e,t)=>(e.updatedDate||e.createdDate).getTime()-(t.updatedDate||t.createdDate).getTime())}}async setIssueState(e,t={}){var r,s,a;let{issue:o,state:i}=e;if(!o.repository)throw Error('GitLab requires "repository" for this function.');let n=`mutation SetIssueState($fullPath: ID!, $issueId: String!, $status: IssueStateEvent!) {
	updateIssue(input: { projectPath: $fullPath, iid: $issueId, stateEvent: $status }) {
    issue {
      id
    }
	}
}`;if(!(null!=(a=null==(s=null==(r=(await ez(this.config,{query:n,variables:{fullPath:`${o.repository.owner.login}/${o.repository.name}`,issueId:o.number,status:"OPEN"===i?"REOPEN":"CLOSE"}},t)).body.data)?void 0:r.updateIssue)?void 0:s.issue)&&a.id))throw Error("Could not set issue status")}async closeIssue(e,t={}){await this.setIssueState({...e,state:"CLOSED"},t)}async reOpenIssue(e,t={}){await this.setIssueState({...e,state:"OPEN"},t)}async setIssueLabels(e,t={}){var r,s,a;let{issue:o,labels:i}=e;if(!o.repository)throw Error('GitLab requires a "repository" for this function.');let n=i.map(e=>{if(!e.graphQLId)throw Error('GitLab requires label "graphQLId" for this function.');return e.graphQLId}),l=`mutation SetIssueLabels($fullPath: ID!, $issueId: String!, $labelGraphQLIds: [ID!]) {
  updateIssue(input: { projectPath: $fullPath, iid: $issueId, labelIds: $labelGraphQLIds }) {
    issue {
      id
    }
  }
}`;if(!(null!=(a=null==(s=null==(r=(await ez(this.config,{query:l,variables:{fullPath:`${o.repository.owner.login}/${o.repository.name}`,issueId:o.number,labelGraphQLIds:n}},t)).body.data)?void 0:r.updateIssue)?void 0:s.issue)&&a.id))throw Error("Could not set issue labels")}async setIssueMilestone(e,t={}){var r,s,a;let{issue:o,milestone:i}=e;if(!o.repository)throw Error('GitLab requires "repository" for this function.');let n=`mutation SetIssueMilestone($fullPath: ID!, $issueId: String!, $milestoneId: ID) {
  updateIssue(input: { projectPath: $fullPath, iid: $issueId, milestoneId: $milestoneId }) {
    errors
    issue {
      id
      milestone {
        id
      }
    }
  }
}`,l=await ez(this.config,{query:n,variables:{fullPath:`${o.repository.owner.login}/${o.repository.name}`,issueId:o.number,milestoneId:(null==i?void 0:i.id)??null}},t),u=null==(r=l.body.data)?void 0:r.updateIssue;if(!(null!=(s=null==u?void 0:u.issue)&&s.id)||l.body.errors||(null==(a=null==u?void 0:u.errors)?void 0:a.length)!==0)throw Error("Could not set milestone of issue")}async setIssueAssignees(e,t={}){var r,s,a;let{issue:o,assignees:i}=e;if(!o.repository)throw Error('GitLab requires "repository" for this function.');let n=i.map(e=>e.username),l=`mutation SetIssueAssignees($fullPath: ID!, $issueId: String!, $assigneeUsernames: [String!]!) {
  issueSetAssignees(input: { projectPath: $fullPath, iid: $issueId, assigneeUsernames: $assigneeUsernames }) {
    errors,
    issue {
      id
    }
  }
}`,u=null==(r=(await ez(this.config,{query:l,variables:{fullPath:`${o.repository.owner.login}/${o.repository.name}`,issueId:o.number,assigneeUsernames:n}},t)).body.data)?void 0:r.issueSetAssignees;if(!(null!=(s=null==u?void 0:u.issue)&&s.id)||(null==(a=null==u?void 0:u.errors)?void 0:a.length)!==0)throw Error("Could not set issue assignees")}async getMilestonesForRepo(e,t={}){var r,s,a,o,i,n,l;let{repo:{namespace:u,name:d},cursor:p}=e,c=await ez(this.config,{query:`
query getLabelsForRepo(
  $fullPath: ID!
  $after: String
) {
  project(
    fullPath: $fullPath
  ) {
    webUrl
    milestones(after: $after) {
      nodes {
        ${e0}
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
`,variables:{fullPath:`${u}/${d}`,after:p}},t);return{pageInfo:(null==(a=null==(s=null==(r=c.body.data)?void 0:r.project)?void 0:s.milestones)?void 0:a.pageInfo)??{endCursor:null,hasNextPage:!1},data:(null==(l=null==(n=null==(i=null==(o=c.body.data)?void 0:o.project)?void 0:i.milestones)?void 0:n.nodes)?void 0:l.map(e=>{var t,r;return ti(e,(null==(r=null==(t=c.body.data)?void 0:t.project)?void 0:r.webUrl)||"")}))??[]}}async getLabelsForRepo(e,t={}){var r,s,a,o,i,n,l;let{repo:{namespace:u,name:d},cursor:p}=e,c=await ez(this.config,{query:`
query getLabelsForRepo(
  $fullPath: ID!
  $after: String
) {
  project(
    fullPath: $fullPath
  ) {
    labels(after: $after) {
      nodes {
        ${e2}
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
`,variables:{fullPath:`${u}/${d}`,after:p}},t);return{pageInfo:(null==(a=null==(s=null==(r=c.body.data)?void 0:r.project)?void 0:s.labels)?void 0:a.pageInfo)??{endCursor:null,hasNextPage:!1},data:(null==(l=null==(n=null==(i=null==(o=c.body.data)?void 0:o.project)?void 0:i.labels)?void 0:n.nodes)?void 0:l.map(tr))??[]}}},tl=["assignee","comment","summary","created","creator","updated","votes","issuetype","status","labels","components","project"],tu=(e,t,r)=>{var s,a,o,i;let n=e.fields.assignee,l=!r;return{id:e.id,commentCount:e.fields.comment.comments.length,number:e.key,title:e.fields.summary,url:t?`${t}/browse/${e.key}`:null,closedDate:null,createdDate:new Date(e.fields.created),author:th(e.fields.creator,t,l),updatedDate:new Date(e.fields.updated),assignees:n?[th(n,t,l)]:[],description:null,repository:null,project:{name:e.fields.project.name,resourceId:r??null,namespace:null},state:tg(e.fields.status),statusTransitions:(null==(s=e.transitions)?void 0:s.map(td))??[],components:(null==(a=e.fields.components)?void 0:a.map(tp))??[],type:e.fields.issuetype.name,upvoteCount:(null==(o=e.fields.votes)?void 0:o.votes)||0,labels:(null==(i=e.fields.labels)?void 0:i.map(e=>({color:null,description:null,id:null,name:e})))??[]}},td=e=>{let t;switch(e.to.statusCategory.name){case"To Do":t="TO_DO";break;case"In Progress":t="IN_PROGRESS";break;default:t="DONE"}return{name:e.name,id:e.id,to:{id:e.to.id,name:e.to.name,color:e.to.statusCategory.colorName,category:t}}},tp=e=>({description:e.description??null,id:e.id,name:e.name}),tc=(e,t,r)=>r&&e.name?`${t}/secure/ViewProfile.jspa?name=${encodeURIComponent(e.name)}`:`${t}/jira/people/${e.accountId}`,th=(e,t,r)=>({id:(r?e.key:e.accountId)??"",name:e.displayName,email:e.emailAddress,avatarUrl:e.avatarUrls["48x48"],username:e.displayName,url:tc(e,t,r)}),tg=e=>{let t;switch(e.statusCategory.name){case"To Do":t="TO_DO";break;case"In Progress":t="IN_PROGRESS";break;default:t="DONE"}return{id:e.id,name:e.name,color:e.statusCategory.colorName,category:t}},tm=(e,t,r)=>r?`${t.baseUrl||"https://api.atlassian.com/ex/jira"}/${r}`:`${(null==t?void 0:t.baseUrl)||e.baseUrl}`,tf=async(e,t,r,s={})=>{let{number:a,resourceId:o}=t||{};return{data:tu((await e.request({url:`${tm(e,s,o)}/rest/api/2/issue/${a}?fields=${tl.join(",")}&expand=transitions`,headers:$(s.token||e.token)})).body,r,o)}},ty=async(e,t,r,s={})=>{let{page:a,resourceId:o}=t||{},i=a??0,n=`statusCategory != Done AND (creator = currentUser() OR assignee = currentUser()
OR comment ~ currentUser() OR summary ~ currentUser() OR description ~ currentUser())`,l=(await e.request({url:`${tm(e,s,o)}/rest/api/2/search?jql=${n}&startAt=${i}&maxResults=10&fields=${tl.join(",")}&expand=transitions`,headers:$(s.token||e.token)})).body.issues.map(e=>tu(e,r,o)),u=10==l.length;return{data:l,pageInfo:{hasNextPage:u,nextPage:u?i+l.length:null}}},tv=async(e,t,r,s={})=>{let{assigneeLogins:a,authorLogin:o,mentionLogin:i,page:n,project:l,resourceId:u}=t||{},d=n??0,p=[`project = "${l}"`,"statusCategory != Done"];o&&p.push(`creator in ("${o}")`),a&&0!==a.length&&p.push(`assignee in ("${a.join('", "')}")`),i&&p.push(`comment ~ "${i}"`);let c=(await e.request({url:`${tm(e,s,u)}/rest/api/2/search?jql=${p.join(" AND ")}&startAt=${d}&maxResults=10&fields=${tl.join(",")}&expand=transitions`,headers:$(s.token||e.token)})).body.issues.map(e=>tu(e,r,u)),h=10==c.length;return{data:c,pageInfo:{hasNextPage:h,nextPage:h?d+c.length:null}}},tR=async(e,t,r={})=>{let{issue:s,labels:a}=t;if(!s.project)throw Error('Jira requires a "project" for this function.');let o={fields:{labels:a.map(e=>e.name)}};await e.request({method:"PUT",url:`${tm(e,r,s.project.resourceId??void 0)}/rest/api/2/issue/${s.id}`,body:JSON.stringify(o),headers:{...$(r.token||e.token),"Content-Type":"application/json"}})},tb=async(e,t,r={})=>{let{issue:s,components:a}=t;if(!s.project)throw Error('Jira requires a "project" for this function.');let o={fields:{components:a.map(e=>({id:e.id}))}};await e.request({method:"PUT",url:`${tm(e,r,s.project.resourceId??void 0)}/rest/api/2/issue/${s.id}`,body:JSON.stringify(o),headers:{...$(r.token||e.token),"Content-Type":"application/json"}})},tI=async(e,t,r={})=>{let{issue:s,status:a}=t;if(!s.project)throw Error('Jira requires a "project" for this function.');if(!a.id)throw Error('Jira requires a status "id" for this function.');let o={transition:{id:a.id}};await e.request({method:"POST",url:`${tm(e,r,s.project.resourceId??void 0)}/rest/api/2/issue/${s.id}/transitions`,body:JSON.stringify(o),headers:{...$(r.token||e.token),"Content-Type":"application/json"}})},tw=async(e,t,r={})=>{let{resourceId:s,projectIdOrKey:a}=t,o=new URL(`${tm(e,r,s)}/rest/api/2/project/${a}/components`);return{data:(await e.request({url:o.toString(),headers:$(r.token||e.token)})).body}},tq="https://api.atlassian.com/ex/jira",t$=class extends w{constructor(){super(...arguments),this._resourceUrlCache={}}async getResourceUrl(e,t={}){var r;let s=t.token||this.config.token;if(!s)return null;let a=this._resourceUrlCache[s];return a?a[e.resourceId]??null:(await this.getJiraResourcesForCurrentUser(t),(null==(r=this._resourceUrlCache[s])?void 0:r[e.resourceId])??null)}async getCurrentUserForResource(e,t={}){let r=await this.getResourceUrl({resourceId:e.resourceId},t),s=await this.config.request({url:`${t.baseUrl||tq}/${e.resourceId}/rest/api/2/myself`,headers:$(t.token||this.config.token)});return{data:{name:s.body.displayName,email:s.body.emailAddress,avatarUrl:s.body.avatarUrls["48x48"],id:s.body.accountId,username:s.body.displayName,url:r?`${r}/jira/people/${s.body.accountId}`:null}}}async getJiraResourcesForCurrentUser(e={}){let t=await this.config.request({url:`${e.baseUrl||"https://api.atlassian.com/"}/oauth/token/accessible-resources`,headers:$(e.token||this.config.token)}),r=e.token||this.config.token,s=r?this._resourceUrlCache[r]||{}:void 0,a=t.body.map(e=>(s&&(s[e.id]=e.url),{avatarUrl:e.avatarUrl,id:e.id,name:e.name,url:e.url}));return r&&(this._resourceUrlCache[r]=s),{data:a}}async getJiraProjectsForResource(e,t={}){let r=new URL(`${t.baseUrl||tq}/${e.resourceId}/rest/api/2/project/search`);r.searchParams.set("maxResults","100"),e.cursor&&r.searchParams.set("startAt",e.cursor);let s=await this.config.request({url:r.toString(),headers:$(t.token||this.config.token)});return{pageInfo:{hasNextPage:0!==s.body.values.length,endCursor:(s.body.startAt+s.body.values.length).toString()},data:s.body.values.map(t=>({id:t.id,key:t.key,name:t.name,resourceId:e.resourceId}))}}async getJiraProjectsForResources(e,t={}){let r=[];return await Promise.all(e.resourceIds.map(async e=>{let s=await this.getJiraProjectsForResource({resourceId:e},t);r.push(...s.data)})),{data:r}}async getAccountsForJiraProject(e,t={}){let{resourceId:r,projectKey:s,cursor:a}=e,o=await this.getResourceUrl({resourceId:r},t),i=new URL(`${t.baseUrl||tq}/${r}/rest/api/2/user/assignable/search`);i.searchParams.set("maxResults","100"),a&&i.searchParams.set("startAt",a),i.searchParams.set("project",s);let n=await this.config.request({url:i.toString(),headers:$(t.token||this.config.token)});return{pageInfo:{hasNextPage:0!==n.body.length,endCursor:((a?parseInt(a):0)+n.body.length).toString()},data:n.body.filter(e=>"app"!==e.accountType&&e.active).map(e=>th(e,o,!1))}}async getComponentsForJiraProject(e,t={}){return await tw(this.config,e,t)}async getIssue(e,t={}){let r=await this.getResourceUrl({resourceId:e.resourceId},t);return await tf(this.config,e,r,t)}async getIssuesForProject(e,t={}){let r=await this.getResourceUrl({resourceId:e.resourceId},t);return await tv(this.config,e,r,t)}async getIssuesForResourceForCurrentUser(e,t={}){let r=await this.getResourceUrl({resourceId:e.resourceId},t);return await ty(this.config,e,r,t)}async setIssueStatus(e,t={}){await tI(this.config,e,t)}async setIssueAssignee(e,t={}){let{issue:r,assignee:s}=e;if(!r.project)throw Error('Jira Cloud requires a "project" for this function.');if(!r.project.resourceId)throw Error('Jira Cloud requires a project "resourceId" for this function.');let a={accountId:null==s?void 0:s.id};await this.config.request({method:"PUT",url:`${t.baseUrl||tq}/${r.project.resourceId}/rest/api/2/issue/${r.id}/assignee`,body:JSON.stringify(a),headers:{...$(t.token||this.config.token),"Content-Type":"application/json"}})}async setIssueComponents(e,t={}){await tb(this.config,e,t)}async setIssueLabels(e,t={}){await tR(this.config,e,t)}async getLabelsForResource(e,t={}){let{resourceId:r,cursor:s}=e,a=new URL(`${t.baseUrl||tq}/${r}/rest/api/2/label`);a.searchParams.set("maxResults","100"),s&&a.searchParams.set("startAt",s);let o=await this.config.request({url:a.toString(),headers:$(t.token||this.config.token)});return{pageInfo:{hasNextPage:!o.body.isLast,endCursor:(o.body.startAt+o.body.values.length).toString()},data:o.body.values.map(e=>({color:null,description:null,id:null,name:e}))}}},tP=class extends q{async getCurrentUser(e={}){let t=await this.config.request({url:`${(null==e?void 0:e.baseUrl)||this.config.baseUrl}/rest/api/2/myself`,headers:$((null==e?void 0:e.token)||this.config.token)});return{data:{name:t.body.displayName,email:t.body.emailAddress,avatarUrl:t.body.avatarUrls["48x48"],id:t.body.key,username:t.body.displayName,url:null}}}async getJiraProjects(e={}){return{data:(await this.config.request({url:`${(null==e?void 0:e.baseUrl)||this.config.baseUrl}/rest/api/2/project`,headers:$((null==e?void 0:e.token)||this.config.token)})).body.map(e=>({id:e.id,name:e.name}))}}async getIssue(e,t={}){if(!t.baseUrl)throw Error('Jira Server requires a "baseUrl" for this function.');return await tf(this.config,e,t.baseUrl,t)}async getIssuesForProject(e,t={}){if(!t.baseUrl)throw Error('Jira Server requires a "baseUrl" for this function.');return await tv(this.config,e,t.baseUrl,t)}async getIssuesForResourceForCurrentUser(e,t={}){if(!t.baseUrl)throw Error('Jira Server requires a "baseUrl" for this function.');return await ty(this.config,e,t.baseUrl,t)}async setIssueStatus(e,t={}){await tI(this.config,e,t)}async setIssueLabels(e,t={}){await tR(this.config,e,t)}async setIssueComponents(e,t={}){await tb(this.config,e,t)}async getLabels(e={}){return{data:(await this.config.request({url:`${(null==e?void 0:e.baseUrl)||this.config.baseUrl}/rest/api/2/jql/autocompletedata/suggestions?fieldName=labels`,headers:$(e.token||this.config.token)})).body.results.map(({displayName:e})=>({color:null,description:null,id:null,name:e}))}}async getComponentsForJiraProject(e,t={}){return await tw(this.config,e,t)}},tE="https://api.trello.com",tU=(e,t)=>{let r=new Date(1e3*parseInt(e.id.substring(0,8),16));return{id:e.id,commentCount:e.badges.comments,number:e.idShort.toString(),title:e.name,url:e.url,closedDate:null,createdDate:new Date(r.toISOString()),author:null,updatedDate:new Date(e.dateLastActivity),assignees:e.idMembers.map(e=>({id:e,username:null,name:null,email:null,avatarUrl:null,url:null})),description:null,state:t[e.idList??""]?{id:e.idList,name:t[e.idList].name,color:null}:null,type:null,repository:null,upvoteCount:e.badges.votes,labels:e.labels.map(e=>({color:e.color,description:null,id:e.id,name:e.name}))}},tS=class extends w{async getCurrentUser(e,t={}){let r=await this.config.request({url:`${t.baseUrl||tE}/1/members/me?key=${e.appKey}&token=${t.token||this.config.token}`,headers:$(t.token||this.config.token)});return{data:{name:r.body.fullName,email:r.body.email,avatarUrl:r.body.avatarHash?`https://trello-members.s3.amazonaws.com/${r.body.id}/${r.body.avatarHash}/50.png`:null,id:r.body.id,username:r.body.username,url:r.body.url}}}async getBoardsForCurrentUser(e,t={}){return{data:(await this.config.request({url:`${t.baseUrl||tE}/1/members/me/boards?fields=name&key=${e.appKey}&token=${t.token||this.config.token}&filter=open`,headers:$(t.token||this.config.token)})).body.map(e=>({id:e.id,name:e.name}))}}async getListsForTrelloBoard(e,t={}){let{appKey:r,boardId:s}=e;return{data:(await this.config.request({url:`${t.baseUrl||tE}/1/boards/${s}/lists?key=${r}&token=${t.token||this.config.token}`,headers:$(t.token||this.config.token)})).body}}async getAccountsForTrelloBoard(e,t={}){let{appKey:r,boardId:s}=e;return{data:(await this.config.request({url:`${t.baseUrl||tE}/1/boards/${s}/members?key=${r}&token=${t.token||this.config.token}`,headers:$(t.token||this.config.token)})).body.map(e=>({id:e.id,name:e.fullName,username:e.username,email:null,avatarUrl:null,url:null}))}}async getIssuesForBoard(e,t={}){let r=["-is:archived","sort:edited"],{appKey:s,boardId:a,filterText:o,assigneeLogins:i,trelloBoardListsById:n}=e||{};i&&r.push("@me");let l=`${o?`${o}`:""}${r.join(" ")} board:${a}`;return{data:(await this.config.request({url:`${t.baseUrl||tE}/1/search?key=${s}&query=${l}&cards_limit=1000&token=${t.token||this.config.token}`,headers:$(t.token||this.config.token)})).body.cards.map(e=>tU(e,n||{}))}}async updateIssue(e,t,r,s){return await this.config.request({method:"PUT",url:`${s.baseUrl||tE}/1/cards/${t.id}?key=${e}&token=${s.token||this.config.token}&${r}`,headers:$(s.token||this.config.token)})}async setIssueStatus(e,t={}){let{appKey:r,issue:s,status:a}=e;if(!a.id)throw Error('Trello requires a status "id" for this function.');let o=`idList=${a.id}`;if(!(await this.updateIssue(r,s,o,t)).body.id)throw Error("Could not set issue status")}async setIssueAssignees(e,t={}){let{appKey:r,issue:s,assignees:a}=e,o=a.map(e=>e.id),i=`idMembers=${encodeURIComponent(o.join(","))}`;if(!(await this.updateIssue(r,s,i,t)).body.id)throw Error("Could not set issue status")}async setIssueLabels(e,t={}){let{appKey:r,issue:s,labels:a}=e,o=a.map(e=>e.id).join(",");if(!(await this.config.request({method:"PUT",url:`${t.baseUrl||tE}/1/cards/${s.id}?key=${r}&token=${t.token||this.config.token}&idLabels=${encodeURIComponent(o)}`,headers:$(t.token||this.config.token)})).body.id)throw Error("Could not set issue status")}async setIssueArchived(e,t={}){let{appKey:r,issue:s,archived:a}=e;if(!(await this.config.request({method:"PUT",url:`${t.baseUrl||tE}/1/cards/${s.id}?key=${r}&token=${t.token||this.config.token}&closed=${a}`,headers:$(t.token||this.config.token)})).body.id)throw Error("Could not update issue archived status")}async archiveIssue(e,t={}){await this.setIssueArchived({...e,archived:!0},t)}async unArchiveIssue(e,t={}){await this.setIssueArchived({...e,archived:!1},t)}async getLabelsForBoard(e,t={}){let{appKey:r,boardId:s}=e;return{data:(await this.config.request({url:`${t.baseUrl||tE}/1/boards/${s}/labels?key=${r}&token=${t.token||this.config.token}`,headers:$(t.token||this.config.token)})).body.map(e=>({color:e.color,description:null,id:e.id,name:e.name}))}}},tC={};c(tC,{getIssueUniqueId:()=>tD,getPullRequestUniqueId:()=>tL});var tD=(e,t,r,s="")=>{let a=[];return a.push(s),a.push(e),a.push(t),a.push(r),JSON.stringify(a)},tL=(e,t,r,s,a="")=>{let o=[];return o.push(a),o.push(e),o.push(t),o.push(r),o.push(s),JSON.stringify(o)},tA={};c(tA,{getIssueUniqueId:()=>tF,getPullRequestUniqueId:()=>tN});var tF=(e,t)=>JSON.stringify(["",e,t]),tN=(e,t)=>JSON.stringify(["",e,t]),tT={};c(tT,{getIssueUniqueId:()=>tj,getPullRequestUniqueId:()=>tk});var tj=(e,t,r)=>JSON.stringify([r,e,t]),tk=(e,t,r)=>JSON.stringify([r,e,t]),tQ={};c(tQ,{CHANGES_REQUESTED_BUCKET_ID:()=>tH,CONFLICTS_BUCKET_ID:()=>tM,DRAFT_BUCKET_ID:()=>tW,FAILING_CI_BUCKET_ID:()=>tx,NEEDS_MY_REVIEW_BUCKET_ID:()=>tB,OTHER_BUCKET_ID:()=>tV,READY_TO_MERGE_BUCKET_ID:()=>tG,REVIEWER_COMMENTED_BUCKET_ID:()=>tz,UNASSIGNED_REVIEWERS_BUCKET_ID:()=>t_,WAITING_FOR_REVIEW_BUCKET_ID:()=>tJ,groupPullRequestsIntoBuckets:()=>tK});var tO=(e,t,r,s)=>({id:e,faIconName:r,name:t,priority:s,pullRequests:[]}),tG="readyToMerge",t_="unassignedReviewers",tx="failingCI",tM="conflicts",tB="needsMyReview",tH="changesRequested",tz="reviewerCommented",tJ="waitingForReview",tW="draft",tV="other",tK=(e,t)=>{let r={readyToMerge:tO("readyToMerge","Ready to Merge","code-merge",0),unassignedReviewers:tO("unassignedReviewers","Unassigned Reviewers","user-plus",1),failingCI:tO("failingCI","Failing CI","circle-x",2),conflicts:tO("conflicts","Resolve Conflicts","triangle-exclamation",3),needsMyReview:tO("needsMyReview","Needs My Review","eye",4),changesRequested:tO("changesRequested","Suggested Changes","file-plus",5),reviewerCommented:tO("reviewerCommented","Reviewer Commented","comment",6),waitingForReview:tO("waitingForReview","Waiting for Review","circle-pause",7),draft:tO("draft","Draft","compass-drafting",8),other:tO("other","Other","ellipsis",9)};return e.forEach(e=>{var s,a,o,i,n,l,u,d;let p=!0,c=(null==(s=e.author)?void 0:s.id)===t.id,h=(null==(a=e.assignees)?void 0:a.some(e=>e.id===t.id))??!1,g=(null==(o=e.reviews)?void 0:o.some(e=>e.reviewer.id===t.id))??!1;(c||h&&!g)&&"MERGEABLE"===e.mergeableState&&(!e.reviewDecision||"APPROVED"===e.reviewDecision)&&((null==(i=e.permissions)?void 0:i.canMerge)??!0)&&(r.readyToMerge.pullRequests.push(e),p=!1),c&&!(null!=(n=e.reviews)&&n.length)&&(r.unassignedReviewers.pullRequests.push(e),p=!1),c&&null!=(u=null==(l=e.headCommit)?void 0:l.buildStatuses)&&u.some(e=>"ERROR"===e.state||"FAILED"===e.state)&&(r.failingCI.pullRequests.push(e),p=!1),c&&"CONFLICTS"===e.mergeableState&&(r.conflicts.pullRequests.push(e),p=!1),null!=(d=e.reviews)&&d.some(e=>e.reviewer.id===t.id&&"REVIEW_REQUESTED"===e.state)&&(r.needsMyReview.pullRequests.push(e),p=!1),c&&"CHANGES_REQUESTED"===e.reviewDecision&&(r.changesRequested.pullRequests.push(e),p=!1),c&&"COMMENTED"===e.reviewDecision&&(r.reviewerCommented.pullRequests.push(e),p=!1),c&&"REVIEW_REQUESTED"===e.reviewDecision&&(r.waitingForReview.pullRequests.push(e),p=!1),c&&e.isDraft&&(r.draft.pullRequests.push(e),p=!1),p&&r.other.pullRequests.push(e)}),r},tY={};c(tY,{getIssueUniqueId:()=>tX,getPullRequestRank:()=>t0,getPullRequestUniqueId:()=>tZ});var tX=(e,t="")=>{let r=[];return r.push(t),r.push(e),JSON.stringify(r)},tZ=(e,t="")=>{let r=[];return r.push(t),r.push(e),JSON.stringify(r)},t0=(e,t,r)=>{var s,a,o;let i=0,n,l;return null==(s=e.reviews)||s.forEach(e=>{e.reviewer.id===t&&(n=e.state),"CHANGES_REQUESTED"===e.state?l="CHANGES_REQUESTED":"APPROVED"===e.state&&"CHANGES_REQUESTED"!==l&&(l="APPROVED")}),l||(l="REVIEW_REQUESTED"),(null==(a=e.author)?void 0:a.id)===t?i+=1e3:null!=(o=e.assignees)&&o.find(e=>e.id===t)?i+=900:"REVIEW_REQUESTED"===n?i+=800:r&&(i+=700),"APPROVED"===l?"MERGEABLE"===e.mergeableState?i+=100:"CONFLICTS"===e.mergeableState?i+=90:i+=80:"CHANGES_REQUESTED"==l&&(i+=70),i},t1={};c(t1,{getIssueUniqueId:()=>t4,getPullRequestUniqueId:()=>t2});var t4=(e,t="")=>{let r=[];return r.push(t),r.push(e),JSON.stringify(r)},t2=(e,t="")=>{let r=[];return r.push(t),r.push(e),JSON.stringify(r)},t7={};c(t7,{getIssueUniqueId:()=>t3,getJiraServerIssueUniqueId:()=>t6});var t3=(e,t,r)=>{let s=[];return s.push(""),s.push(e),s.push(t),s.push(r),JSON.stringify(s)},t6=(e,t,r)=>{let s=[];return s.push(r),s.push(""),s.push(e),s.push(t),JSON.stringify(s)},t8={};c(t8,{getIssueUniqueId:()=>t5});var t5=(e,t,r,s="")=>{let a=[];return a.push(s),a.push(e),a.push(t),a.push(r),JSON.stringify(a)},t9=e=>{let t={request:null==e?void 0:e.request};return{azureDevOps:new Q({...t,...null==e?void 0:e.azureDevOps}),bitbucket:new H({...t,...null==e?void 0:e.bitbucket}),bitbucketServer:new W({...t,...null==e?void 0:e.bitbucketServer}),github:new e_({...t,...null==e?void 0:e.github}),gitlab:new tn({...t,...null==e?void 0:e.gitlab}),jira:new t$({...t,...null==e?void 0:e.jira}),jiraServer:new tP({...t,...null==e?void 0:e.jiraServer}),trello:new tS({...t,...null==e?void 0:e.trello})}},re={azureDevOps:tC,bitbucket:tA,bitbucketServer:tT,github:tY,gitlab:t1,gitProvider:tQ,jira:t7,trello:t8}},1574:(e,t,r)=>{r.r(t),r.d(t,{ProvidersApi:()=>ProvidersApi});var s=r(910),a=r.n(s),o=r(8803),i=r(1298);let ProvidersApi=class ProvidersApi{constructor(e){this.container=e;let t=a()();this.providers={[i.Q7.GitHub]:{...i.Mt[i.Q7.GitHub],provider:t.github,getCurrentUserFn:t.github.getCurrentUser.bind(t.github),getPullRequestsForReposFn:t.github.getPullRequestsForRepos.bind(t.github),getIssuesForReposFn:t.github.getIssuesForRepos.bind(t.github)},[i.PY.GitHubEnterprise]:{...i.Mt[i.PY.GitHubEnterprise],provider:t.github,getCurrentUserFn:t.github.getCurrentUser.bind(t.github),getPullRequestsForReposFn:t.github.getPullRequestsForRepos.bind(t.github),getIssuesForReposFn:t.github.getIssuesForRepos.bind(t.github)},[i.Q7.GitLab]:{...i.Mt[i.Q7.GitLab],provider:t.gitlab,getCurrentUserFn:t.gitlab.getCurrentUser.bind(t.gitlab),getPullRequestsForReposFn:t.gitlab.getPullRequestsForRepos.bind(t.gitlab),getPullRequestsForRepoFn:t.gitlab.getPullRequestsForRepo.bind(t.gitlab),getIssuesForReposFn:t.gitlab.getIssuesForRepos.bind(t.gitlab),getIssuesForRepoFn:t.gitlab.getIssuesForRepo.bind(t.gitlab)},[i.PY.GitLabSelfHosted]:{...i.Mt[i.PY.GitLabSelfHosted],provider:t.gitlab,getCurrentUserFn:t.gitlab.getCurrentUser.bind(t.gitlab),getPullRequestsForReposFn:t.gitlab.getPullRequestsForRepos.bind(t.gitlab),getPullRequestsForRepoFn:t.gitlab.getPullRequestsForRepo.bind(t.gitlab),getIssuesForReposFn:t.gitlab.getIssuesForRepos.bind(t.gitlab),getIssuesForRepoFn:t.gitlab.getIssuesForRepo.bind(t.gitlab)},[i.Q7.Bitbucket]:{...i.Mt[i.Q7.Bitbucket],provider:t.bitbucket,getCurrentUserFn:t.bitbucket.getCurrentUser.bind(t.bitbucket),getPullRequestsForReposFn:t.bitbucket.getPullRequestsForRepos.bind(t.bitbucket),getPullRequestsForRepoFn:t.bitbucket.getPullRequestsForRepo.bind(t.bitbucket)},[i.Q7.AzureDevOps]:{...i.Mt[i.Q7.AzureDevOps],provider:t.azureDevOps,getCurrentUserForInstanceFn:t.azureDevOps.getCurrentUserForInstance.bind(t.azureDevOps),getPullRequestsForReposFn:t.azureDevOps.getPullRequestsForRepos.bind(t.azureDevOps),getPullRequestsForRepoFn:t.azureDevOps.getPullRequestsForRepo.bind(t.azureDevOps),getIssuesForAzureProjectFn:t.azureDevOps.getIssuesForAzureProject.bind(t.azureDevOps),getReposForAzureProjectFn:t.azureDevOps.getReposForAzureProject.bind(t.azureDevOps)},[i.tp.Jira]:{...i.Mt[i.tp.Jira],provider:t.jira,getCurrentUserForResourceFn:t.jira.getCurrentUserForResource.bind(t.jira),getJiraResourcesForCurrentUserFn:t.jira.getJiraResourcesForCurrentUser.bind(t.jira),getJiraProjectsForResourcesFn:t.jira.getJiraProjectsForResources.bind(t.jira),getIssueFn:t.jira.getIssue.bind(t.jira),getIssuesForProjectFn:t.jira.getIssuesForProject.bind(t.jira),getIssuesForResourceForCurrentUserFn:t.jira.getIssuesForResourceForCurrentUser.bind(t.jira)},[i.tp.Trello]:{...i.Mt[i.tp.Trello],provider:t.trello}}}providers;getScopesForProvider(e){return this.providers[e]?.scopes}getProviderDomain(e){return this.providers[e]?.domain}getProviderPullRequestsPagingMode(e){return this.providers[e]?.pullRequestsPagingMode}getProviderIssuesPagingMode(e){return this.providers[e]?.issuesPagingMode}providerSupportsPullRequestFilters(e,t){return this.providers[e]?.supportedPullRequestFilters!=null&&t.every(t=>this.providers[e]?.supportedPullRequestFilters?.includes(t))}providerSupportsIssueFilters(e,t){return this.providers[e]?.supportedIssueFilters!=null&&t.every(t=>this.providers[e]?.supportedIssueFilters?.includes(t))}isRepoIdsInput(e){return null!=e&&Array.isArray(e)&&e.every(e=>"string"==typeof e||"number"==typeof e)}async getProviderToken(e,t){let r=null==e.domain||null==e.scopes?void 0:{domain:e.domain,scopes:e.scopes};try{return(await this.container.integrationAuthentication.getSession(e.id,r,{createIfNeeded:t?.createSessionIfNeeded}))?.accessToken}catch{return}}async ensureProviderTokenAndFunction(e,t,r){let s=this.providers[e];if(null==s)throw Error(`Provider with id ${e} not registered`);let a=r??await this.getProviderToken(s);if(null==a)throw Error(`Not connected to provider ${e}`);if(null==s[t])throw Error(`Provider with id ${e} does not support function: ${t}`);return{provider:s,token:a}}handleProviderError(e,t,r){if(null==this.providers[e])throw Error(`Provider with id ${e} not registered`);if(e===i.tp.Jira&&r?.response?.status!=null){if(401===r.response.status)throw new o.v3(e,o.R.Forbidden,r);if(429===r.response.status){let e;let s=r.response.headers?.["x-ratelimit-reset"];throw null!=s&&Number.isNaN(e=parseInt(s,10))&&(e=void 0),new o.qc(r,t,e)}if(r.response.status>=400&&r.response.status<500)throw new o.Iz(r)}throw r}async getPagedResult(e,t,r,s,a="{}"){let o;try{o=JSON.parse(a)}catch{o={}}let i=o.value,n=o.type,l={};"page"===n?l={page:i}:"cursor"===n&&(l={cursor:i});let u={...t,...l},d=await r?.(u,{token:s,isPAT:e.usesPAT});if(null==d)return{values:[]};let p=d.pageInfo?.hasNextPage??!1,c="{}";return d.pageInfo?.endCursor!=null?c=JSON.stringify({value:d.pageInfo?.endCursor,type:"cursor"}):d.pageInfo?.nextPage!=null&&(c=JSON.stringify({value:d.pageInfo?.nextPage,type:"page"})),{values:d.data,paging:{cursor:c,more:p}}}async getPullRequestsForRepos(e,t,r){let{provider:s,token:a}=await this.ensureProviderTokenAndFunction(e,"getPullRequestsForReposFn",r?.accessToken);return this.getPagedResult(s,{...this.isRepoIdsInput(t)?{repoIds:t}:{repos:t},...r},s.getPullRequestsForReposFn,a,r?.cursor)}async getPullRequestsForRepo(e,t,r){let{provider:s,token:a}=await this.ensureProviderTokenAndFunction(e,"getPullRequestsForRepoFn",r?.accessToken);return this.getPagedResult(s,{repo:t,...r},s.getPullRequestsForRepoFn,a,r?.cursor)}async getIssuesForRepos(e,t,r){let{provider:s,token:a}=await this.ensureProviderTokenAndFunction(e,"getIssuesForReposFn",r?.accessToken);return this.getPagedResult(s,{...this.isRepoIdsInput(t)?{repoIds:t}:{repos:t},...r},s.getIssuesForReposFn,a,r?.cursor)}async getIssuesForRepo(e,t,r){let{provider:s,token:a}=await this.ensureProviderTokenAndFunction(e,"getIssuesForRepoFn",r?.accessToken);return this.getPagedResult(s,{repo:t,...r},s.getIssuesForRepoFn,a,r?.cursor)}async getIssuesForAzureProject(e,t,r){let{provider:s,token:a}=await this.ensureProviderTokenAndFunction(i.Q7.AzureDevOps,"getIssuesForAzureProjectFn",r?.accessToken);return this.getPagedResult(s,{namespace:e,project:t,...r},s.getIssuesForAzureProjectFn,a,r?.cursor)}async getReposForAzureProject(e,t,r){let{provider:s,token:a}=await this.ensureProviderTokenAndFunction(i.Q7.AzureDevOps,"getReposForAzureProjectFn",r?.accessToken);return this.getPagedResult(s,{namespace:e,project:t,...r},s.getReposForAzureProjectFn,a,r?.cursor)}async getCurrentUser(e,t){let{provider:r,token:s}=await this.ensureProviderTokenAndFunction(e,"getCurrentUserFn",t?.accessToken);return(await r.getCurrentUserFn?.({token:s,isPAT:r.usesPAT}))?.data}async getCurrentUserForInstance(e,t,r){let{provider:s,token:a}=await this.ensureProviderTokenAndFunction(e,"getCurrentUserForInstanceFn",r?.accessToken);return(await s.getCurrentUserForInstanceFn?.({namespace:t},{token:a,isPAT:s.usesPAT}))?.data}async getCurrentUserForResource(e,t,r){let{provider:s,token:a}=await this.ensureProviderTokenAndFunction(e,"getCurrentUserForResourceFn",r?.accessToken);try{return(await s.getCurrentUserForResourceFn?.({resourceId:t},{token:a}))?.data}catch(t){return this.handleProviderError(e,a,t)}}async getJiraResourcesForCurrentUser(e){let{provider:t,token:r}=await this.ensureProviderTokenAndFunction(i.tp.Jira,"getJiraResourcesForCurrentUserFn",e?.accessToken);try{return(await t.getJiraResourcesForCurrentUserFn?.({token:r}))?.data}catch(e){return this.handleProviderError(i.tp.Jira,r,e)}}async getJiraProjectsForResources(e,t){let{provider:r,token:s}=await this.ensureProviderTokenAndFunction(i.tp.Jira,"getJiraProjectsForResourcesFn",t?.accessToken);try{return(await r.getJiraProjectsForResourcesFn?.({resourceIds:e},{token:s}))?.data}catch(e){return this.handleProviderError(i.tp.Jira,s,e)}}async getIssuesForProject(e,t,r,s){let{provider:a,token:o}=await this.ensureProviderTokenAndFunction(e,"getIssuesForProjectFn",s?.accessToken);try{let e=await a.getIssuesForProjectFn?.({project:t,resourceId:r,...s},{token:o});return e?.data}catch(t){return this.handleProviderError(e,o,t)}}async getIssuesForResourceForCurrentUser(e,t,r){let{provider:s,token:a}=await this.ensureProviderTokenAndFunction(e,"getIssuesForResourceForCurrentUserFn",r?.accessToken);try{let e=await s.getIssuesForResourceForCurrentUserFn?.({resourceId:t},{token:a});return e?.data}catch(t){return this.handleProviderError(e,a,t)}}async getIssue(e,t,r,s){let{provider:a,token:o}=await this.ensureProviderTokenAndFunction(e,"getIssueFn",s?.accessToken);try{let e=await a.getIssueFn?.({resourceId:t,number:r},{token:o});return e?.data}catch(t){return this.handleProviderError(e,o,t)}}}}};