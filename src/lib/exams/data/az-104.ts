import type { Exam } from "../types";

/**
 * Sourced from a community exam-question archive (ExamTopics, via a
 * text-only mirror) for personal study use, cross-checked and re-explained
 * against real Azure product behavior. Roughly half of the original 606-
 * question bank is excluded here: HOTSPOT/drag-and-drop questions whose
 * answer key was only ever shown as an image (not present in this source),
 * and questions whose prompt depends on a table/exhibit the source export
 * dropped entirely — both were unanswerable as posed, so they were left out
 * rather than guessed at.
 */
export const az104: Exam = {
  slug: "az-104",
  title: "Azure Administrator Associate",
  code: "AZ-104",
  description:
    "Manage Azure identities and governance, implement and manage storage, deploy and manage Azure compute resources, configure and manage virtual networking, and monitor and maintain Azure resources.",
  questions: [
  {
    "id": "az104-1-1",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Your company has several departments. Each department has a number of virtual machines (VMs).The company has an Azure subscription that contains a resource group named RG1.All VMs are located in RG1.You want to associate each VM with its respective department.What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Create Azure Management Groups for each department."
      },
      {
        "id": "b",
        "text": "Create a resource group for each department."
      },
      {
        "id": "c",
        "text": "Assign tags to the virtual machines."
      },
      {
        "id": "d",
        "text": "Modify the settings of the virtual machines."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Tags are key-value pairs that can be applied directly to resources like VMs, letting you categorize and track them (for example, by department or cost center) without reorganizing resource groups or management groups."
  },
  {
    "id": "az104-1-2",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company has an Azure Active Directory (Azure AD) subscription.You want to implement an Azure AD conditional access policy.The policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations.Solution: You access the multi-factor authentication page to alter the user settings.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Requiring MFA and an Azure AD-joined device based on sign-in location is configured through a conditional access policy's grant controls, not the legacy per-user MFA settings page, so this solution does not meet the goal."
  },
  {
    "id": "az104-1-3",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company has an Azure Active Directory (Azure AD) subscription.You want to implement an Azure AD conditional access policy.The policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations.Solution: You access the Azure portal to alter the session control of the Azure AD conditional access policy.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Session controls govern things like sign-in frequency and browser session persistence; they don't let you require MFA or a compliant/hybrid Azure AD-joined device, so this solution does not meet the goal."
  },
  {
    "id": "az104-1-4",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company has an Azure Active Directory (Azure AD) subscription.You want to implement an Azure AD conditional access policy.The policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations.Solution: You access the Azure portal to alter the grant control of the Azure AD conditional access policy.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The grant controls of a conditional access policy are exactly where you require MFA and require the device be marked as hybrid Azure AD joined, so modifying the grant control does meet the goal."
  },
  {
    "id": "az104-1-5",
    "type": "single",
    "topic": "Compute",
    "prompt": "You are planning to deploy an Ubuntu Server virtual machine to your company's Azure subscription.You are required to implement a custom deployment that includes adding a particular trusted root certification authority (CA).Which of the following should you use to create the virtual machine?",
    "choices": [
      {
        "id": "a",
        "text": "The New-AzureRmVm cmdlet."
      },
      {
        "id": "b",
        "text": "The New-AzVM cmdlet."
      },
      {
        "id": "c",
        "text": "The Create-AzVM cmdlet."
      },
      {
        "id": "d",
        "text": "The az vm create command."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "The az vm create command (Azure CLI) supports custom-data and script injection parameters needed to add a trusted root certificate during provisioning; New-AzVM and the other cmdlets listed don't offer that level of custom deployment control (and Create-AzVM doesn't exist)."
  },
  {
    "id": "az104-1-6",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured as the usage model.After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company and adding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor Authentication.To achieve this, the Per Enabled User setting must be set for the usage model.Solution: You reconfigure the existing usage model via the Azure portal.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The usage model (Per Authentication vs. Per Enabled User) of a Multi-Factor Authentication provider is fixed when the provider is created and cannot simply be switched afterward in the Azure portal, so this solution does not meet the goal."
  },
  {
    "id": "az104-1-7",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company's Azure solution makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured as the usage model.After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company and adding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor Authentication.To achieve this, the Per Enabled User setting must be set for the usage model.Solution: You reconfigure the existing usage model via the Azure CLI.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Like the portal, the Azure CLI cannot change the usage model of an existing Multi-Factor Authentication provider after it has been created, so this solution does not meet the goal."
  },
  {
    "id": "az104-1-8",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company's Azure solution makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured as the usage model.After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company and adding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor Authentication.To achieve this, the Per Enabled User setting must be set for the usage model.Solution: You create a new Multi-Factor Authentication provider with a backup from the existing Multi-Factor Authentication provider data.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Yes. The usage model (Per Enabled User vs. Per Authentication) is a property chosen when a Multi-Factor Authentication provider is created, and Microsoft's documented process for changing it is exactly this: create a new provider with the desired usage model, then restore the existing provider's data into it."
  },
  {
    "id": "az104-1-9",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-premises ActiveDirectory domain.You have a server named DirSync1 that is configured as a DirSync server.You create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately.Solution: You run the Start-ADSyncSyncCycle -PolicyType Initial PowerShell cmdlet.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Start-ADSyncSyncCycle is an Azure AD Connect cmdlet, not a capability of the legacy DirSync tool described in the scenario, so running it does not trigger the needed synchronization."
  },
  {
    "id": "az104-1-10",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-premises ActiveDirectory domain.You have a server named DirSync1 that is configured as a DirSync server.You create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately.Solution: You use Active Directory Sites and Services to force replication of the Global Catalog on a domain controller.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Forcing Global Catalog replication in Active Directory Sites and Services only propagates changes between on-premises domain controllers; it has no effect on synchronization to Azure AD, so this solution does not meet the goal."
  },
  {
    "id": "az104-1-11",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-premises ActiveDirectory domain.You have a server named DirSync1 that is configured as a DirSync server.You create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately.Solution: You restart the NetLogon service on a domain controller.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Restarting the NetLogon service affects on-premises domain authentication and secure channel functions, not the directory synchronization process to Azure AD, so this solution does not meet the goal."
  },
  {
    "id": "az104-1-12",
    "type": "single",
    "topic": "Storage",
    "prompt": "Your company has a Microsoft Azure subscription.The company has datacenters in Los Angeles and New York.You are configuring the two datacenters as geo-clustered sites for site resiliency.You need to recommend an Azure storage redundancy option.You have the following data storage requirements: • Data must be stored on multiple nodes. • Data must be stored on nodes in separate geographic locations. • Data can be read from the secondary location as well as from the primary location.Which of the following Azure stored redundancy options should you recommend?",
    "choices": [
      {
        "id": "a",
        "text": "Geo-redundant storage"
      },
      {
        "id": "b",
        "text": "Read-only geo-redundant storage"
      },
      {
        "id": "c",
        "text": "Zone-redundant storage"
      },
      {
        "id": "d",
        "text": "Locally redundant storage"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Read-access geo-redundant storage (RA-GRS) replicates data both within the primary region and to a secondary geo-paired region, and it additionally exposes a read-only endpoint on the secondary region, meeting all three stated requirements."
  },
  {
    "id": "az104-1-13",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company has an azure subscription that includes a storage account, a resource group, a blob container and a file share.A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account.You want to review the ARM template that was used by Jon Ross.Solution: You access the Virtual Machine blade.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Virtual Machine blade only shows properties and settings for that specific VM resource; it does not surface the ARM template used to originally deploy resources, so this solution does not meet the goal."
  },
  {
    "id": "az104-1-14",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company has an azure subscription that includes a storage account, a resource group, a blob container and a file share.A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account.You want to review the ARM template that was used by Jon Ross.Solution: You access the Resource Group blade.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Resource Group's general blade doesn't display deployment templates directly — you need to open the resource group's Deployments history, where each deployment's template and parameters are recorded, so simply accessing the Resource Group blade does not meet the goal."
  },
  {
    "id": "az104-1-15",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company has an azure subscription that includes a storage account, a resource group, a blob container and a file share.A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account.You want to review the ARM template that was used by Jon Ross.Solution: You access the Container blade.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The blob Container blade only shows the objects stored in that container; it has no connection to ARM deployment history or templates, so this solution does not meet the goal."
  },
  {
    "id": "az104-1-16",
    "type": "single",
    "topic": "Compute",
    "prompt": "Your company has three virtual machines (VMs) that are included in an availability set.You try to resize one of the VMs, which returns an allocation failure message.It is imperative that the VM is resized.Which of the following actions should you take?",
    "choices": [
      {
        "id": "a",
        "text": "You should only stop one of the VMs."
      },
      {
        "id": "b",
        "text": "You should stop two of the VMs."
      },
      {
        "id": "c",
        "text": "You should stop all three VMs."
      },
      {
        "id": "d",
        "text": "You should remove the necessary VM from the availability set."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Resizing a VM in an availability set to a size unavailable in the current fault/update domain allocation can fail with an allocation error; deallocating all VMs in the availability set frees Azure to reallocate the whole set (including the target VM's new size) across the fabric, resolving the failure."
  },
  {
    "id": "az104-1-17",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure virtual machine (VM) that has a single data disk. You have been tasked with attaching this data disk to another Azure VM.You need to make sure that your strategy allows for the virtual machines to be offline for the least amount of time possible.Which of the following is the action you should take FIRST?",
    "choices": [
      {
        "id": "a",
        "text": "Stop the VM that includes the data disk."
      },
      {
        "id": "b",
        "text": "Stop the VM that the data disk must be attached to."
      },
      {
        "id": "c",
        "text": "Detach the data disk."
      },
      {
        "id": "d",
        "text": "Delete the VM that includes the data disk."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Azure supports detaching a data disk from a running VM without stopping it, so detaching the disk first — then attaching it to the target VM — minimizes downtime compared to stopping either virtual machine."
  },
  {
    "id": "az104-1-18",
    "type": "single",
    "topic": "Compute",
    "prompt": "Your company has an Azure subscription.You need to deploy a number of Azure virtual machines (VMs) using Azure Resource Manager (ARM) templates. You have been informed that the VMs will be included in a single availability set.You are required to make sure that the ARM template you configure allows for as many VMs as possible to remain accessible in the event of fabric failure or maintenance.Which of the following is the value that you should configure for the platformFaultDomainCount property?",
    "choices": [
      {
        "id": "a",
        "text": "10"
      },
      {
        "id": "b",
        "text": "30"
      },
      {
        "id": "c",
        "text": "Min Value"
      },
      {
        "id": "d",
        "text": "Max Value"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "To maximize the number of VMs that stay available during a single fault domain outage, you want to spread the availability set's VMs across as many fault domains as the region supports, so platformFaultDomainCount should be set to its maximum allowed value."
  },
  {
    "id": "az104-1-19",
    "type": "single",
    "topic": "Compute",
    "prompt": "Your company has an Azure subscription.You need to deploy a number of Azure virtual machines (VMs) using Azure Resource Manager (ARM) templates. You have been informed that the VMs will be included in a single availability set.You are required to make sure that the ARM template you configure allows for as many VMs as possible to remain accessible in the event of fabric failure or maintenance.Which of the following is the value that you should configure for the platformUpdateDomainCount property?",
    "choices": [
      {
        "id": "a",
        "text": "10"
      },
      {
        "id": "b",
        "text": "20"
      },
      {
        "id": "c",
        "text": "30"
      },
      {
        "id": "d",
        "text": "40"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure availability sets support a maximum of 20 update domains, and using that ceiling spreads VMs across the most possible update domains, minimizing how many VMs are taken offline together during planned maintenance."
  },
  {
    "id": "az104-1-21",
    "type": "single",
    "topic": "Compute",
    "prompt": "Your company has an Azure Active Directory (Azure AD) tenant that is configured for hybrid coexistence with the on-premises Active Directory domain.The on-premise virtual environment consists of virtual machines (VMs) running on Windows Server 2012 R2 Hyper-V host servers.You have created some PowerShell scripts to automate the configuration of newly created VMs. You plan to create several new VMs.You need a solution that ensures the scripts are run on the new VMs.Which of the following is the best solution?",
    "choices": [
      {
        "id": "a",
        "text": "Configure a SetupComplete.cmd batch file in the %windir%\\setup\\scripts directory."
      },
      {
        "id": "b",
        "text": "Configure a Group Policy Object (GPO) to run the scripts as logon scripts."
      },
      {
        "id": "c",
        "text": "Configure a Group Policy Object (GPO) to run the scripts as startup scripts."
      },
      {
        "id": "d",
        "text": "Place the scripts in a new virtual hard disk (VHD)."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Placing the script as a SetupComplete.cmd in %windir%\\setup\\scripts runs it automatically via Windows Setup on first boot after the generalized (sysprepped) image is deployed to each new VM, ensuring the automation runs consistently on every new machine."
  },
  {
    "id": "az104-1-22",
    "type": "single",
    "topic": "Compute",
    "prompt": "Your company has an Azure Active Directory (Azure AD) tenant that is configured for hybrid coexistence with the on-premises Active Directory domain.You plan to deploy several new virtual machines (VMs) in Azure. The VMs will have the same operating system and custom software requirements.You configure a reference VM in the on-premise virtual environment. You then generalize the VM to create an image.You need to upload the image to Azure to ensure that it is available for selection when you create the new Azure VMs.Which PowerShell cmdlets should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Add-AzVM"
      },
      {
        "id": "b",
        "text": "Add-AzVhd"
      },
      {
        "id": "c",
        "text": "Add-AzImage"
      },
      {
        "id": "d",
        "text": "Add-AzImageDataDisk"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Add-AzVhd uploads a local VHD file into an Azure storage account so it becomes available as a disk/image that new VMs can be created from."
  },
  {
    "id": "az104-1-24",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB.VirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site-to-site VPN connection exists between your company's on- premises network and VirtualNetworkA.You have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After configuring virtual network peering betweenVirtualNetworkA and VirtualNetworkB, you confirm that you are able to access VirtualNetworkB from the company's on-premises network. However, you find that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation.You have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation.Solution: You choose the Allow gateway transit setting on VirtualNetworkA.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Allow gateway transit is a property of the VNet that owns the gateway (VirtualNetworkA), and since the on-premises-to-VNetB path already works, it's already correctly configured there — toggling it again doesn't fix the point-to-site client's problem."
  },
  {
    "id": "az104-1-25",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB.VirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site-to-site VPN connection exists between your company's on- premises network and VirtualNetworkA.You have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After configuring virtual network peering betweenVirtualNetworkA and VirtualNetworkB, you confirm that you are able to access VirtualNetworkB from the company's on-premises network. However, you find that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation.You have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation.Solution: You choose the Allow gateway transit setting on VirtualNetworkB.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Allow gateway transit only applies to the VNet hosting the gateway (VirtualNetworkA); VirtualNetworkB has no gateway of its own to share, so enabling gateway transit on VirtualNetworkB has no effect."
  },
  {
    "id": "az104-1-26",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB.VirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site-to-site VPN connection exists between your company's on- premises network and VirtualNetworkA.You have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After configuring virtual network peering betweenVirtualNetworkA and VirtualNetworkB, you confirm that you are able to access VirtualNetworkB from the company's on-premises network. However, you find that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation.You have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation.Solution: You download and re-install the VPN client configuration package on the Windows 10 workstation.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "After peering is configured, the point-to-site VPN client's local configuration needs to be refreshed with the newly available routes to the peered VNetB address space; downloading and reinstalling the client package pulls in that updated routing information."
  },
  {
    "id": "az104-1-27",
    "type": "single",
    "topic": "Networking",
    "prompt": "Your company has virtual machines (VMs) hosted in Microsoft Azure. The VMs are located in a single Azure virtual network named VNet1.The company has users that work remotely. The remote workers require access to the VMs on VNet1.You need to provide access for the remote workers.What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Configure a Site-to-Site (S2S) VPN."
      },
      {
        "id": "b",
        "text": "Configure a VNet-toVNet VPN."
      },
      {
        "id": "c",
        "text": "Configure a Point-to-Site (P2S) VPN."
      },
      {
        "id": "d",
        "text": "Configure DirectAccess on a Windows Server 2012 server VM."
      },
      {
        "id": "e",
        "text": "Configure a Multi-Site VPN"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "A point-to-site (P2S) VPN lets individual remote users connect securely to Azure virtual network resources over the internet using a per-machine VPN client, which is exactly what's needed for the remote workforce here."
  },
  {
    "id": "az104-1-28",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs).You need to configure an Azure internal load balancer as a listener for the availability group.Solution: You create an HTTP health probe on port 1433.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "SQL Server Always On availability group listeners require a TCP health probe against the specific port used by the availability group, not an HTTP probe, so this solution does not meet the goal."
  },
  {
    "id": "az104-1-29",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs).You need to configure an Azure internal load balancer as a listener for the availability group.Solution: You set Session persistence to Client IP.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Session persistence should remain at its default (None) for the Always On availability group listener scenario; setting it to Client IP is unnecessary and doesn't address the requirement, so this solution does not meet the goal."
  },
  {
    "id": "az104-1-30",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: The question is included in a number of questions that depicts an identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.Your company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs).You need to configure an Azure internal load balancer as a listener for the availability group.Solution: You enable Floating IP.Does the solution meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Enabling Floating IP (Direct Server Return) on the internal load balancer rule is required for the availability group listener architecture, letting the load balancer route traffic to the active replica while preserving the original destination IP/port, which meets the goal."
  },
  {
    "id": "az104-1-31",
    "type": "single",
    "topic": "Networking",
    "prompt": "Your company has two on-premises servers named SRV01 and SRV02. Developers have created an application that runs on SRV01. The application calls a service on SRV02 by IP address.You plan to migrate the application on Azure virtual machines (VMs). You have configured two VMs on a single subnet in an Azure virtual network.You need to configure the two VMs with static internal IP addresses.What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Run the New-AzureRMVMConfig PowerShell cmdlet."
      },
      {
        "id": "b",
        "text": "Run the Set-AzureSubnet PowerShell cmdlet."
      },
      {
        "id": "c",
        "text": "Modify the VM properties in the Azure Management Portal."
      },
      {
        "id": "d",
        "text": "Modify the IP properties in Windows Network and Sharing Center."
      },
      {
        "id": "e",
        "text": "Run the Set-AzureStaticVNetIP PowerShell cmdlet."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Static internal (private) IP addresses for an Azure VM's network interface are configured through the VM's network settings in the Azure portal, which is what modifying the VM properties in the Azure Management Portal refers to."
  },
  {
    "id": "az104-1-32",
    "type": "single",
    "topic": "Networking",
    "prompt": "Your company has an Azure Active Directory (Azure AD) subscription.You need to deploy five virtual machines (VMs) to your company's virtual network subnet.The VMs will each have both a public and private IP address. Inbound and outbound security rules for all of these virtual machines must be identical.Which of the following is the least amount of network interfaces needed for this configuration?",
    "choices": [
      {
        "id": "a",
        "text": "5"
      },
      {
        "id": "b",
        "text": "10"
      },
      {
        "id": "c",
        "text": "20"
      },
      {
        "id": "d",
        "text": "40"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "A single network interface can hold both a private and a public IP address configuration, so one NIC per VM is enough — five VMs need only five NICs in total."
  },
  {
    "id": "az104-1-33",
    "type": "single",
    "topic": "Networking",
    "prompt": "Your company has an Azure Active Directory (Azure AD) subscription.You need to deploy five virtual machines (VMs) to your company's virtual network subnet.The VMs will each have both a public and private IP address. Inbound and outbound security rules for all of these virtual machines must be identical.Which of the following is the least amount of security groups needed for this configuration?",
    "choices": [
      {
        "id": "a",
        "text": "4"
      },
      {
        "id": "b",
        "text": "3"
      },
      {
        "id": "c",
        "text": "2"
      },
      {
        "id": "d",
        "text": "1"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Because all five VMs require identical inbound and outbound rules, a single network security group can be associated with all of their NICs (or their subnet), so only one NSG is needed."
  },
  {
    "id": "az104-1-34",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "Your company's Azure subscription includes Azure virtual machines (VMs) that run Windows Server 2016.One of the VMs is backed up every day using Azure Backup Instant Restore.When the VM becomes infected with data encrypting ransomware, you decide to recover the VM's files.Which of the following is TRUE in this scenario?",
    "choices": [
      {
        "id": "a",
        "text": "You can only recover the files to the infected VM."
      },
      {
        "id": "b",
        "text": "You can recover the files to any VM within the company's subscription."
      },
      {
        "id": "c",
        "text": "You can only recover the files to a new VM."
      },
      {
        "id": "d",
        "text": "You will not be able to recover the files."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure Backup's file-recovery feature mounts the recovery point as a volume that can be browsed and copied from any machine with network access to it, not just the original or a newly created VM, so files can be recovered to any VM in the subscription."
  },
  {
    "id": "az104-1-35",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "Your company's Azure subscription includes Azure virtual machines (VMs) that run Windows Server 2016.One of the VMs is backed up every day using Azure Backup Instant Restore.When the VM becomes infected with data encrypting ransomware, you are required to restore the VM.Which of the following actions should you take?",
    "choices": [
      {
        "id": "a",
        "text": "You should restore the VM after deleting the infected VM."
      },
      {
        "id": "b",
        "text": "You should restore the VM to any VM within the company's subscription."
      },
      {
        "id": "c",
        "text": "You should restore the VM to a new Azure VM."
      },
      {
        "id": "d",
        "text": "You should restore the VM to an on-premise Windows device."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Standard guidance for restoring a ransomware-infected VM is to restore the backup to a new Azure VM rather than overwriting the infected one, preserving forensic evidence and avoiding reintroducing the compromised disk."
  },
  {
    "id": "az104-1-36",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You administer a solution in Azure that is currently having performance issues.You need to find the cause of the performance issues pertaining to metrics on the Azure infrastructure.Which of the following is the tool you should use?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Traffic Analytics"
      },
      {
        "id": "b",
        "text": "Azure Monitor"
      },
      {
        "id": "c",
        "text": "Azure Activity Log"
      },
      {
        "id": "d",
        "text": "Azure Advisor"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure Monitor collects and surfaces platform-level performance metrics (CPU, memory, disk, network) for Azure infrastructure resources, making it the right tool for diagnosing infrastructure-related performance issues."
  },
  {
    "id": "az104-1-37",
    "type": "multi",
    "topic": "Monitor & Backup",
    "prompt": "Your company has an Azure subscription that includes a Recovery Services vault.You want to use Azure Backup to schedule a backup of your company's virtual machines (VMs) to the Recovery Services vault.Which of the following VMs can you back up? Choose all that apply.",
    "choices": [
      {
        "id": "a",
        "text": "VMs that run Windows 10."
      },
      {
        "id": "b",
        "text": "VMs that run Windows Server 2012 or higher."
      },
      {
        "id": "c",
        "text": "VMs that have NOT been shut down."
      },
      {
        "id": "d",
        "text": "VMs that run Debian 8.2+."
      },
      {
        "id": "e",
        "text": "VMs that have been shut down."
      }
    ],
    "correctChoiceIds": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "explanation": "Azure Backup for VMs supports current Windows Server and many Linux distributions (including Debian), works whether the VM is powered on or off at backup time, and Windows 10 VMs can also be protected as Azure VMs, so all of the listed VM types can be backed up."
  },
  {
    "id": "az104-1-38",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You have an Azure Active Directory (Azure AD) tenant named contoso.com.You have a CSV file that contains the names and email addresses of 500 external users.You need to create a guest user account in contoso.com for each of the 500 external users.Solution: You create a PowerShell script that runs the New-AzureADUser cmdlet for each user.Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "New-AzureADUser creates standard member user accounts in the local tenant; it isn't designed to create B2B guest accounts for external users, so this solution does not meet the goal."
  },
  {
    "id": "az104-1-39",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You have an Azure Active Directory (Azure AD) tenant named contoso.com.You have a CSV file that contains the names and email addresses of 500 external users.You need to create a guest user account in contoso.com for each of the 500 external users.Solution: From Azure AD in the Azure portal, you use the Bulk create user operation.Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Bulk create feature in the Azure AD admin center is meant for creating regular member user accounts from a CSV template, not for inviting external users as guests, so this solution does not meet the goal."
  },
  {
    "id": "az104-1-40",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You have an Azure Active Directory (Azure AD) tenant named contoso.com.You have a CSV file that contains the names and email addresses of 500 external users.You need to create a guest user account in contoso.com for each of the 500 external users.Solution: You create a PowerShell script that runs the New-AzureADMSInvitation cmdlet for each external user.Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "New-AzureADMSInvitation is the PowerShell cmdlet purpose-built for programmatically inviting external users as Azure AD B2B guest accounts, which meets the goal."
  },
  {
    "id": "az104-2-2",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure subscription that contains an Azure Active Directory (Azure AD) tenant named contoso.com and an Azure Kubernetes Service (AKS) cluster named AKS1.An administrator reports that she is unable to grant access to AKS1 to the users in contoso.com.You need to ensure that access to AKS1 can be granted to the contoso.com users.What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "From contoso.com, modify the Organization relationships settings."
      },
      {
        "id": "b",
        "text": "From contoso.com, create an OAuth 2.0 authorization endpoint."
      },
      {
        "id": "c",
        "text": "Recreate AKS1."
      },
      {
        "id": "d",
        "text": "From AKS1, create a namespace."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Enabling Azure AD-based access control for AKS requires registering Azure AD application(s) for the cluster, which is set up as an OAuth 2.0 authorization endpoint/app registration in the Azure AD tenant, before role assignments to contoso.com users can work."
  },
  {
    "id": "az104-2-3",
    "type": "multi",
    "topic": "Identity & Governance",
    "prompt": "You have a Microsoft 365 tenant and an Azure Active Directory (Azure AD) tenant named contoso.com.You plan to grant three users named User1, User2, and User3 access to a temporary Microsoft SharePoint document library named Library1.You need to create groups for the users. The solution must ensure that the groups are deleted automatically after 180 days.Which two groups should you create? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "a Microsoft 365 group that uses the Assigned membership type"
      },
      {
        "id": "b",
        "text": "a Security group that uses the Assigned membership type"
      },
      {
        "id": "c",
        "text": "a Microsoft 365 group that uses the Dynamic User membership type"
      },
      {
        "id": "d",
        "text": "a Security group that uses the Dynamic User membership type"
      },
      {
        "id": "e",
        "text": "a Security group that uses the Dynamic Device membership type"
      }
    ],
    "correctChoiceIds": [
      "a",
      "c"
    ],
    "explanation": "Azure AD group expiration policies (which auto-delete unused groups after a set period, such as 180 days) only apply to Microsoft 365 groups, not security groups, so the two valid choices must both be Microsoft 365 groups — regardless of whether their membership is Assigned or Dynamic User."
  },
  {
    "id": "az104-2-8",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription named AZPT1 that contains the resources shown in the following table:You create a new Azure subscription named AZPT2.You need to identify which resources can be moved to AZPT2.Which resources should you identify?",
    "choices": [
      {
        "id": "a",
        "text": "VM1, storage1, VNET1, and VM1Managed only"
      },
      {
        "id": "b",
        "text": "VM1 and VM1Managed only"
      },
      {
        "id": "c",
        "text": "VM1, storage1, VNET1, VM1Managed, and RVAULT1"
      },
      {
        "id": "d",
        "text": "RVAULT1 only"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Most resources, including VMs, storage accounts, and virtual networks (along with their managed disks), support being moved between subscriptions, but a Recovery Services vault with backup data generally cannot be moved across subscriptions, so RVAULT1 must be excluded."
  },
  {
    "id": "az104-2-9",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You recently created a new Azure subscription that contains a user named Admin1.Admin1 attempts to deploy an Azure Marketplace resource by using an Azure Resource Manager template. Admin1 deploys the template by using AzurePowerShell and receives the following error message: User failed validation to purchase resources. Error message:Legal terms have not been accepted for this item on this subscription. To accept legal terms, please go to the Azure portal (http://go.microsoft.com/fwlink/?LinkId=534873) and configure programmatic deployment for the Marketplace item or create it there for the first time.`You need to ensure that Admin1 can deploy the Marketplace resource successfully.What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "From Azure PowerShell, run the Set-AzApiManagementSubscription cmdlet"
      },
      {
        "id": "b",
        "text": "From the Azure portal, register the Microsoft.Marketplace resource provider"
      },
      {
        "id": "c",
        "text": "From Azure PowerShell, run the Set-AzMarketplaceTerms cmdlet"
      },
      {
        "id": "d",
        "text": "From the Azure portal, assign the Billing administrator role to Admin1"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "That error means the Marketplace image's legal terms haven't been programmatically accepted for the subscription; running Set-AzMarketplaceTerms accepts the terms so ARM template deployments of that Marketplace item can proceed."
  },
  {
    "id": "az104-2-10",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure Active Directory (Azure AD) tenant that contains 5,000 user accounts.You create a new user account named AdminUser1.You need to assign the User administrator administrative role to AdminUser1.What should you do from the user account properties?",
    "choices": [
      {
        "id": "a",
        "text": "From the Licenses blade, assign a new license"
      },
      {
        "id": "b",
        "text": "From the Directory role blade, modify the directory role"
      },
      {
        "id": "c",
        "text": "From the Groups blade, invite the user account to a new group"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure AD administrative roles like User administrator are assigned from a user's Directory role blade in the Azure AD admin center, so that's where you'd modify AdminUser1's role."
  },
  {
    "id": "az104-2-11",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com that contains 100 user accounts.You purchase 10 Azure AD Premium P2 licenses for the tenant.You need to ensure that 10 users can use all the Azure AD Premium features.What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "From the Licenses blade of Azure AD, assign a license"
      },
      {
        "id": "b",
        "text": "From the Groups blade of each user, invite the users to a group"
      },
      {
        "id": "c",
        "text": "From the Azure AD domain, add an enterprise application"
      },
      {
        "id": "d",
        "text": "From the Directory role blade of each user, modify the directory role"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Azure AD Premium features are unlocked per user by assigning a purchased license to that user from the Licenses blade; owning licenses for the tenant isn't enough until they're explicitly assigned."
  },
  {
    "id": "az104-2-12",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription named Subscription1 and an on-premises deployment of Microsoft System Center Service Manager.Subscription1 contains a virtual machine named VM1.You need to ensure that an alert is set in Service Manager when the amount of available memory on VM1 is below 10 percent.What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "Create an automation runbook"
      },
      {
        "id": "b",
        "text": "Deploy a function app"
      },
      {
        "id": "c",
        "text": "Deploy the IT Service Management Connector (ITSM)"
      },
      {
        "id": "d",
        "text": "Create a notification"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The IT Service Management Connector (ITSM) bridges Azure Monitor/Log Analytics alerts with on-premises IT service management tools like System Center Service Manager, and must be deployed before alerts can flow into Service Manager."
  },
  {
    "id": "az104-2-16",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1.Subscription1 has a user named User1. User1 has the following roles: • Reader • Security Admin • Security ReaderYou need to ensure that User1 can assign the Reader role for VNet1 to other users.What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Remove User1 from the Security Reader and Reader roles for Subscription1."
      },
      {
        "id": "b",
        "text": "Assign User1 the User Access Administrator role for VNet1."
      },
      {
        "id": "c",
        "text": "Assign User1 the Network Contributor role for VNet1."
      },
      {
        "id": "d",
        "text": "Assign User1 the Network Contributor role for RG1."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Granting the ability to assign RBAC roles to other users requires the Microsoft.Authorization/roleAssignments/write permission, which the built-in User Access Administrator role provides; Security Admin, Security Reader, and plain Reader don't include it."
  },
  {
    "id": "az104-2-17",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure Active Directory (Azure AD) tenant named contosocloud.onmicrosoft.com.Your company has a public DNS zone for contoso.com.You add contoso.com as a custom domain name to Azure AD.You need to ensure that Azure can verify the domain name.Which type of DNS record should you create?",
    "choices": [
      {
        "id": "a",
        "text": "MX"
      },
      {
        "id": "b",
        "text": "NSEC"
      },
      {
        "id": "c",
        "text": "PTR"
      },
      {
        "id": "d",
        "text": "RRSIG"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Azure AD supports verifying a custom domain by creating either a TXT or an MX record with the value Azure provides at the domain's DNS host; of the options listed, MX is the valid verification record type."
  },
  {
    "id": "az104-2-18",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers.Subscription1 contains a resource group named Dev.You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.Solution: On Subscription1, you assign the DevTest Labs User role to the Developers group.Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The DevTest Labs User role only grants permissions within Azure DevTest Labs; it has nothing to do with creating Logic Apps, so this solution does not meet the goal."
  },
  {
    "id": "az104-2-19",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers.Subscription1 contains a resource group named Dev.You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.Solution: On Subscription1, you assign the Logic App Operator role to the Developers group.Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Logic App Operator role only permits reading, enabling, and disabling existing logic apps — it does not include permission to create new ones — so this solution does not meet the goal."
  },
  {
    "id": "az104-2-20",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers.Subscription1 contains a resource group named Dev.You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.Solution: On Dev, you assign the Contributor role to the Developers group.Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The Contributor role, scoped to the Dev resource group, grants permission to create and manage any resource type there, including Logic Apps, which meets the goal with an appropriately scoped assignment."
  },
  {
    "id": "az104-2-22",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1.You need to view the error events from a table named Event.Which query should you run in Workspace1?",
    "choices": [
      {
        "id": "a",
        "text": "Get-Event Event | where {$_.EventType == \"error\"}"
      },
      {
        "id": "b",
        "text": "search in (Event) \"error\""
      },
      {
        "id": "c",
        "text": "select * from Event where EventType == \"error\""
      },
      {
        "id": "d",
        "text": "search in (Event) * | where EventType -eq \"error\""
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "In Log Analytics (Kusto Query Language), the syntax `search in (TableName) \"term\"` searches for a keyword across the specified table's columns, which is valid KQL, unlike the PowerShell-style or SQL-style options listed."
  },
  {
    "id": "az104-2-26",
    "type": "multi",
    "topic": "Networking",
    "prompt": "You have an Azure subscription.Users access the resources in the subscription from either home or from customer sites. From home, users must establish a point-to-site VPN to access the Azure resources. The users on the customer sites access the Azure resources by using site-to-site VPNs.You have a line-of-business-app named App1 that runs on several Azure virtual machine. The virtual machines run Windows Server 2016.You need to ensure that the connections to App1 are spread across all the virtual machines.What are two possible Azure services that you can use? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "an internal load balancer"
      },
      {
        "id": "b",
        "text": "a public load balancer"
      },
      {
        "id": "c",
        "text": "an Azure Content Delivery Network (CDN)"
      },
      {
        "id": "d",
        "text": "Traffic Manager"
      },
      {
        "id": "e",
        "text": "an Azure Application Gateway"
      }
    ],
    "correctChoiceIds": [
      "a",
      "e"
    ],
    "explanation": "An internal load balancer and an Application Gateway can both distribute traffic across the App1 VMs for clients reaching them over the VPN connections; a public load balancer, CDN, or Traffic Manager aren't appropriate since traffic originates from private VPN-connected users rather than the public internet or multiple regions."
  },
  {
    "id": "az104-2-27",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription.You have 100 Azure virtual machines.You need to quickly identify underutilized virtual machines that can have their service tier changed to a less expensive offering.Which blade should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Monitor"
      },
      {
        "id": "b",
        "text": "Advisor"
      },
      {
        "id": "c",
        "text": "Metrics"
      },
      {
        "id": "d",
        "text": "Customer insights"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure Advisor analyzes resource utilization and surfaces cost-optimization recommendations, including flagging underutilized VMs that could be resized to a cheaper SKU."
  },
  {
    "id": "az104-2-30",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription linked to an Azure Active Directory tenant. The tenant includes a user account named User1.You need to ensure that User1 can assign a policy to the tenant root management group.What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Assign the Owner role for the Azure Subscription to User1, and then modify the default conditional access policies."
      },
      {
        "id": "b",
        "text": "Assign the Owner role for the Azure subscription to User1, and then instruct User1 to configure access management for Azure resources."
      },
      {
        "id": "c",
        "text": "Assign the Global administrator role to User1, and then instruct User1 to configure access management for Azure resources."
      },
      {
        "id": "d",
        "text": "Create a new management group and delegate User1 as the owner of the new management group."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Only a Global Administrator can use the 'Access management for Azure resources' switch to elevate themselves to User Access Administrator at the tenant root management group scope, which is required before they can assign Azure Policy there."
  },
  {
    "id": "az104-2-33",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription.Solution: You assign the Network Contributor role at the subscription level to Admin1.Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Enabling Traffic Analytics also requires permission to read/write to the Log Analytics workspace it stores data in, which the Network Contributor role alone does not grant, so this solution does not meet the goal."
  },
  {
    "id": "az104-2-34",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription.Solution: You assign the Owner role at the subscription level to Admin1.Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The Owner role includes every permission needed across both the network resources and the Log Analytics workspace, so assigning Owner at the subscription level is sufficient to enable Traffic Analytics."
  },
  {
    "id": "az104-2-35",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription.Solution: You assign the Reader role at the subscription level to Admin1.Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Reader role is read-only and grants no ability to configure NSG Flow Logs or Traffic Analytics, so this solution does not meet the goal."
  },
  {
    "id": "az104-2-36",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription that contains a user named User1.You need to ensure that User1 can deploy virtual machines and manage virtual networks. The solution must use the principle of least privilege.Which role-based access control (RBAC) role should you assign to User1?",
    "choices": [
      {
        "id": "a",
        "text": "Owner"
      },
      {
        "id": "b",
        "text": "Virtual Machine Contributor"
      },
      {
        "id": "c",
        "text": "Contributor"
      },
      {
        "id": "d",
        "text": "Virtual Machine Administrator Login"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Of the roles listed, only Contributor grants permission to both deploy virtual machines and manage virtual networks; the narrower Virtual Machine Contributor role doesn't include virtual network management, so Contributor is the least-privileged role here that satisfies both requirements."
  },
  {
    "id": "az104-2-38",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription named Subscription1 that contains an Azure virtual machine named VM1. VM1 is in a resource group named RG1.VM1 runs services that will be used to deploy resources to RG1.You need to ensure that a service running on VM1 can manage the resources in RG1 by using the identity of VM1.What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "From the Azure portal, modify the Managed Identity settings of VM1"
      },
      {
        "id": "b",
        "text": "From the Azure portal, modify the Access control (IAM) settings of RG1"
      },
      {
        "id": "c",
        "text": "From the Azure portal, modify the Access control (IAM) settings of VM1"
      },
      {
        "id": "d",
        "text": "From the Azure portal, modify the Policies settings of RG1"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Before a service on the VM can use the VM's own identity to manage resources, a system-assigned or user-assigned managed identity must first be enabled on VM1; only afterward can that identity be granted RBAC permissions on RG1."
  },
  {
    "id": "az104-2-39",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription that contains a resource group named TestRG.You use TestRG to validate an Azure deployment.TestRG contains the following resources:You need to delete TestRG.What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "Modify the backup configurations of VM1 and modify the resource lock type of VNET1"
      },
      {
        "id": "b",
        "text": "Remove the resource lock from VNET1 and delete all data in Vault1"
      },
      {
        "id": "c",
        "text": "Turn off VM1 and remove the resource lock from VNET1"
      },
      {
        "id": "d",
        "text": "Turn off VM1 and delete all data in Vault1"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "A resource group can't be deleted while any of its resources carry a resource lock or while a Recovery Services vault inside it still has protected backup data, so the lock on VNET1 must be removed and Vault1's backup data must be deleted first."
  },
  {
    "id": "az104-2-40",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have an Azure DNS zone named adatum.com.You need to delegate a subdomain named research.adatum.com to a different DNS server in Azure.What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Create an NS record named research in the adatum.com zone."
      },
      {
        "id": "b",
        "text": "Create a PTR record named research in the adatum.com zone."
      },
      {
        "id": "c",
        "text": "Modify the SOA record of adatum.com."
      },
      {
        "id": "d",
        "text": "Create an A record named *.research in the adatum.com zone."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Delegating a subdomain to a different DNS server is done by creating an NS record for that subdomain (research) in the parent zone (adatum.com), pointing to the name servers that will authoritatively host research.adatum.com."
  },
  {
    "id": "az104-2-42",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1.You need to view the error events from a table named Event.Which query should you run in Workspace1?",
    "choices": [
      {
        "id": "a",
        "text": "Get-Event Event | where {$_.EventType == \"error\"}"
      },
      {
        "id": "b",
        "text": "Event | search \"error\""
      },
      {
        "id": "c",
        "text": "select * from Event where EventType == \"error\""
      },
      {
        "id": "d",
        "text": "search in (Event) * | where EventType -eq \"error\""
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The `TableName | search \"term\"` pipeline syntax is valid Kusto Query Language for searching a keyword across a table's columns in Log Analytics, unlike the PowerShell-style or malformed options listed."
  },
  {
    "id": "az104-2-43",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have a registered DNS domain named contoso.com.You create a public Azure DNS zone named contoso.com.You need to ensure that records created in the contoso.com zone are resolvable from the internet.What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Create NS records in contoso.com."
      },
      {
        "id": "b",
        "text": "Modify the SOA record in the DNS domain registrar."
      },
      {
        "id": "c",
        "text": "Create the SOA record in contoso.com."
      },
      {
        "id": "d",
        "text": "Modify the NS records in the DNS domain registrar."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "For a public Azure DNS zone to be authoritative and resolvable from the internet, the domain registrar's NS delegation records must be updated to point to the name servers Azure DNS assigned to the zone."
  },
  {
    "id": "az104-2-47",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure Active Directory (Azure AD) tenant.You plan to delete multiple users by using Bulk delete in the Azure Active Directory admin center.You need to create and upload a file for the bulk delete.Which user attributes should you include in the file?",
    "choices": [
      {
        "id": "a",
        "text": "The user principal name and usage location of each user only"
      },
      {
        "id": "b",
        "text": "The user principal name of each user only"
      },
      {
        "id": "c",
        "text": "The display name of each user only"
      },
      {
        "id": "d",
        "text": "The display name and usage location of each user only"
      },
      {
        "id": "e",
        "text": "The display name and user principal name of each user only"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Azure AD bulk delete template only requires the user principal name (UPN) of each account to identify which users to remove."
  },
  {
    "id": "az104-2-49",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription.Solution: You assign the Traffic Manager Contributor role at the subscription level to Admin1.Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Traffic Manager Contributor grants permissions over Azure Traffic Manager profiles, an unrelated DNS-based traffic-routing service; it has no bearing on NSG Flow Logs or Traffic Analytics, so this solution does not meet the goal."
  },
  {
    "id": "az104-2-50",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have three offices and an Azure subscription that contains an Azure Active Directory (Azure AD) tenant.You need to grant user management permissions to a local administrator in each office.What should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Azure AD roles"
      },
      {
        "id": "b",
        "text": "administrative units"
      },
      {
        "id": "c",
        "text": "access packages in Azure AD entitlement management"
      },
      {
        "id": "d",
        "text": "Azure roles"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Administrative units let you scope an Azure AD administrative role, such as User Administrator, to a defined subset of users or devices (for example, per office), which is exactly the delegated-management scenario described."
  },
  {
    "id": "az104-2-51",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers.Subscription1 contains a resource group named Dev.You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.Solution: On Dev, you assign the Logic App Contributor role to the Developers group.Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The Logic App Contributor role, scoped to the Dev resource group, includes permission to create and manage Logic Apps, meeting the goal."
  },
  {
    "id": "az104-2-53",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1.Subscription1 has a user named User1. User1 has the following roles: • Reader • Security Admin • Security ReaderYou need to ensure that User1 can assign the Reader role for VNet1 to other users.What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1."
      },
      {
        "id": "b",
        "text": "Assign User1 the Owner role for VNet1."
      },
      {
        "id": "c",
        "text": "Assign User1 the Contributor role for VNet1."
      },
      {
        "id": "d",
        "text": "Assign User1 the Network Contributor role for VNet1."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Assigning User1 the Owner role for VNet1 grants full control at that scope, including the ability to assign RBAC roles (such as Reader) to other users on that resource."
  },
  {
    "id": "az104-2-55",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a file share named share1.The subscription is linked to a hybrid Azure Active Directory (Azure AD) tenant that contains a security group named Group1.You need to grant Group1 the Storage File Data SMB Share Elevated Contributor role for share1.What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "Enable Active Directory Domain Service (AD DS) authentication for storage1."
      },
      {
        "id": "b",
        "text": "Grant share-level permissions by using File Explorer."
      },
      {
        "id": "c",
        "text": "Mount share1 by using File Explorer."
      },
      {
        "id": "d",
        "text": "Create a private endpoint."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Assigning the Storage File Data SMB Share Elevated Contributor role (which allows modifying NTFS-level permissions on file share objects) requires Active Directory-based authentication — on-premises AD DS or Azure AD DS — to be enabled on the storage account first, since Azure RBAC-based file permissions depend on that identity integration."
  },
  {
    "id": "az104-2-56",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have 15 Azure subscriptions.You have an Azure Active Directory (Azure AD) tenant that contains a security group named Group1.You plan to purchase additional Azure subscription.You need to ensure that Group1 can manage role assignments for the existing subscriptions and the planned subscriptions. The solution must meet the following requirements: • Use the principle of least privilege. • Minimize administrative effort.What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Assign Group1 the Owner role for the root management group."
      },
      {
        "id": "b",
        "text": "Assign Group1 the User Access Administrator role for the root management group."
      },
      {
        "id": "c",
        "text": "Create a new management group and assign Group1 the User Access Administrator role for the group."
      },
      {
        "id": "d",
        "text": "Create a new management group and assign Group1 the Owner role for the group."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Assigning User Access Administrator to Group1 at the tenant root management group scope lets it manage role assignments across all current subscriptions and any new ones automatically added under the root, without needing to create additional management groups or grant the broader Owner role."
  },
  {
    "id": "az104-2-58",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com:User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.You need to create new user accounts in external.contoso.onmicrosoft.com.Solution: You instruct User2 to create the user accounts.Does that meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Creating a brand-new Azure AD tenant automatically makes only its creator (User1) a Global Administrator there; User2 has no role in the new tenant unless explicitly granted one, so instructing User2 to create accounts does not meet the goal."
  },
  {
    "id": "az104-2-59",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com:User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.You need to create new user accounts in external.contoso.onmicrosoft.com.Solution: You instruct User4 to create the user accounts.Does that meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "As with the other users in this scenario, User4 has no administrative role in the newly created tenant unless one was explicitly assigned, so instructing User4 to create the accounts does not meet the goal."
  },
  {
    "id": "az104-2-60",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com:User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.You need to create new user accounts in external.contoso.onmicrosoft.com.Solution: You instruct User3 to create the user accounts.Does that meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "User3 likewise has no inherent permissions in the newly created external tenant unless a role was explicitly granted there, so this solution does not meet the goal."
  },
  {
    "id": "az104-2-61",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have two Azure subscriptions named Sub1 and Sub2.An administrator creates a custom role that has an assignable scope to a resource group named RG1 in Sub1.You need to ensure that you can apply the custom role to any resource group in Sub1 and Sub2. The solution must minimize administrative effort.What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Select the custom role and add Sub1 and Sub2 to the assignable scopes. Remove RG1 from the assignable scopes."
      },
      {
        "id": "b",
        "text": "Create a new custom role for Sub1. Create a new custom role for Sub2. Remove the role from RG1."
      },
      {
        "id": "c",
        "text": "Create a new custom role for Sub1 and add Sub2 to the assignable scopes. Remove the role from RG1."
      },
      {
        "id": "d",
        "text": "Select the custom role and add Sub1 to the assignable scopes. Remove RG1 from the assignable scopes. Create a new custom role for Sub2."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Editing the existing custom role definition to add Sub1 and Sub2 to its assignableScopes (and removing the narrower RG1 scope) lets the same role be applied anywhere in either subscription, avoiding the extra effort of creating and maintaining duplicate role definitions."
  },
  {
    "id": "az104-2-63",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1.You need to view the error events from a table named Event.Which query should you run in Workspace1?",
    "choices": [
      {
        "id": "a",
        "text": "select * from Event where EventType == \"error\""
      },
      {
        "id": "b",
        "text": "Event | search \"error\""
      },
      {
        "id": "c",
        "text": "Event | where EventType is \"error\""
      },
      {
        "id": "d",
        "text": "Get-Event Event | where {$_.EventType == \"error\"}"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "`Event | search \"error\"` is valid Kusto Query Language, piping the Event table into the search operator to find rows containing \"error\"; the other options use invalid PowerShell- or SQL-style syntax."
  },
  {
    "id": "az104-2-64",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure App Services web app named App1. You plan to deploy App1 by using Web Deploy. You need to ensure that the developers of App1 can use their Azure AD credentials to deploy content to App1. The solution must use the principle of least privilege. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Assign the Owner role to the developers"
      },
      {
        "id": "b",
        "text": "Configure app-level credentials for FTPS"
      },
      {
        "id": "c",
        "text": "Assign the Website Contributor role to the developers"
      },
      {
        "id": "d",
        "text": "Configure user-level credentials for FTPS"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The Website Contributor role lets developers manage and deploy content to the web app (including Web Deploy with their own Azure AD credentials) without granting broader rights over the App Service plan or other resources, unlike Owner; FTPS credentials are a separate, non-Azure-AD publishing method."
  },
  {
    "id": "az104-2-65",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: From Azure AD in the Azure portal, you use the Bulk invite users operation. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Bulk invite feature expects a CSV of email addresses (with an optional redirection URL column) uploaded through the Azure AD portal; the file described only has names and email addresses, so as stated it does not satisfy the bulk-invite workflow, and the goal is not met."
  },
  {
    "id": "az104-2-68",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have an Azure subscription that contains 10 virtual machines, a key vault named Vault1, and a network security group (NSG) named NSG1. All the resources are deployed to the East US Azure region. The virtual machines are protected by using NSG1. NSG1 is configured to block all outbound traffic to the internet. You need to ensure that the virtual machines can access Vault1. The solution must use the principle of least privilege and minimize administrative effort. What should you configure as the destination of the outbound security rule for NSG1?",
    "choices": [
      {
        "id": "a",
        "text": "an application security group"
      },
      {
        "id": "b",
        "text": "a service tag"
      },
      {
        "id": "c",
        "text": "an IP address range"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure Key Vault is reachable through the AzureKeyVault service tag, so an outbound NSG rule that targets that tag (instead of a changing list of IP addresses) grants exactly the access needed with minimal upkeep, satisfying least privilege."
  },
  {
    "id": "az104-2-71",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles: Reader, Security Admin, Security Reader. You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Assign User1 the Network Contributor role for VNet1."
      },
      {
        "id": "b",
        "text": "Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1."
      },
      {
        "id": "c",
        "text": "Assign User1 the Owner role for VNet1."
      },
      {
        "id": "d",
        "text": "Assign User1 the Network Contributor role for RG1."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Assigning roles to other users requires Microsoft.Authorization/roleAssignments/write permission at the target scope; the Owner role on VNet1 grants that permission scoped only to the virtual network, letting User1 assign the Reader role there without gaining broader subscription or resource-group rights."
  },
  {
    "id": "az104-2-73",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles: Reader, Security Admin, Security Reader. You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Remove User1 from the Security Reader role for Subscript on 1. Assign User1 the Contributor role for RG1."
      },
      {
        "id": "b",
        "text": "Assign User1 the Owner role for VNet1."
      },
      {
        "id": "c",
        "text": "Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription 1."
      },
      {
        "id": "d",
        "text": "Assign User1 the Contributor role for VNet1."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Assigning roles to other users requires Microsoft.Authorization/roleAssignments/write permission at the target scope; the Owner role on VNet1 grants that permission scoped only to the virtual network, letting User1 assign the Reader role there without gaining broader subscription or resource-group rights."
  },
  {
    "id": "az104-2-76",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles: Reader, Security Admin, Security Reader. You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1."
      },
      {
        "id": "b",
        "text": "Assign User1 the Access Administrator role for VNet1."
      },
      {
        "id": "c",
        "text": "Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1."
      },
      {
        "id": "d",
        "text": "Assign User1 the Network Contributor role for RG1."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Only roles that include Microsoft.Authorization/roleAssignments/write can delegate role assignments; the User Access Administrator role scoped to VNet1 grants exactly that permission at the virtual network, letting User1 assign the Reader role to others there without wider access."
  },
  {
    "id": "az104-2-79",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles: Reader, Security Admin, Security Reader. You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1."
      },
      {
        "id": "b",
        "text": "Assign User1 the User Access Administrator role for VNet1."
      },
      {
        "id": "c",
        "text": "Remove User1 from the Security Reader and Reader roles for Subscription1."
      },
      {
        "id": "d",
        "text": "Assign User1 the Contributor role for VNet1."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The User Access Administrator role includes Microsoft.Authorization/roleAssignments/write, the permission needed to assign roles to other users; scoping it to VNet1 lets User1 grant the Reader role there while keeping access limited to that resource."
  },
  {
    "id": "az104-2-82",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: You create a PowerShell script that runs the New-MgUser cmdlet for each external user. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The New-MgUser cmdlet creates a standard member account in the tenant's own domain; it has no parameter for inviting an external identity as a guest, so it cannot be used to create the required guest user accounts."
  },
  {
    "id": "az104-2-83",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: You create a PowerShell script that runs the New-MgInvitation cmdlet for each external user. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "New-MgInvitation is the Microsoft Graph PowerShell cmdlet built specifically for Azure AD B2B invitations: it creates a guest user object and sends the redemption invitation email, which is exactly what's needed here."
  },
  {
    "id": "az104-2-84",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. A user named User1 has the following roles for Subscription1: Reader, Security Admin, Security Reader. You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Assign User1 the Contributor role for VNet1."
      },
      {
        "id": "b",
        "text": "Assign User1 the Network Contributor role for VNet1."
      },
      {
        "id": "c",
        "text": "Assign User1 the User Access Administrator role for VNet1."
      },
      {
        "id": "d",
        "text": "Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The User Access Administrator role includes the roleAssignments/write permission needed to grant roles to others; assigning it scoped to VNet1 lets User1 assign the Reader role there without extra rights elsewhere."
  },
  {
    "id": "az104-2-85",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. A user named User1 has the following roles for Subscription1: Reader, Security Admin, Security Reader. You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1."
      },
      {
        "id": "b",
        "text": "Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1."
      },
      {
        "id": "c",
        "text": "Assign User1 the Network Contributor role for VNet1."
      },
      {
        "id": "d",
        "text": "Assign User1 the User Access Administrator role for VNet1."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Only the User Access Administrator role (or Owner) carries the roleAssignments/write permission required to delegate access; scoping it to VNet1 satisfies the requirement with the least additional privilege."
  },
  {
    "id": "az104-2-89",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. A user named User1 has the following roles for Subscription1: Reader, Security Admin, Security Reader. You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1."
      },
      {
        "id": "b",
        "text": "Assign User1 the Contributor role for VNet1."
      },
      {
        "id": "c",
        "text": "Assign User1 the Owner role for VNet1."
      },
      {
        "id": "d",
        "text": "Assign User1 the Network Contributor role for RG1."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Owner includes full roleAssignments/write permission, so assigning it at the VNet1 scope lets User1 assign the Reader role to other users there, though User Access Administrator would be the more least-privilege choice when available."
  },
  {
    "id": "az104-2-94",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: You create a PowerShell script that runs the New-MgUser cmdlet for each user. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "New-MgUser provisions a regular member account in the home tenant; it does not create or invite an external guest identity, so running it for each external user does not meet the goal of creating guest accounts."
  },
  {
    "id": "az104-2-99",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription named Sub1 that contains the resources shown in the following table. You create a user named Admin1. To what can you add Admin1 as a co-administrator?",
    "choices": [
      {
        "id": "a",
        "text": "RG1"
      },
      {
        "id": "b",
        "text": "MG1"
      },
      {
        "id": "c",
        "text": "Sub1"
      },
      {
        "id": "d",
        "text": "VM1"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The classic co-administrator role is a subscription-level administrative role and can only be assigned at the subscription scope; it cannot be applied to a resource group, a management group, or an individual resource such as a VM."
  },
  {
    "id": "az104-2-104",
    "type": "multi",
    "topic": "Identity & Governance",
    "prompt": "You have a Microsoft Entra tenant. You plan to perform a bulk import of users. You need to ensure that imported user objects are added automatically as the members of a specific group based on each user's department. The solution must minimize administrative effort. Which two actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "Create groups that use the Assigned membership type."
      },
      {
        "id": "b",
        "text": "Create an Azure Resource Manager (ARM) template."
      },
      {
        "id": "c",
        "text": "Create groups that use the Dynamic User membership type."
      },
      {
        "id": "d",
        "text": "Write a PowerShell script that parses an import file."
      },
      {
        "id": "e",
        "text": "Create an XML file that contains user information and the appropriate attributes."
      },
      {
        "id": "f",
        "text": "Create a CSV file that contains user information and the appropriate attributes."
      }
    ],
    "correctChoiceIds": [
      "c",
      "f"
    ],
    "explanation": "Dynamic User membership groups automatically add or remove members based on a rule evaluated against user attributes such as department, and importing users from a CSV file that includes the department attribute lets the dynamic rule pick each user up automatically, minimizing ongoing administrative effort."
  },
  {
    "id": "az104-2-105",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription that contains a storage account named storage1. You need to ensure that the access keys for storage1 rotate automatically. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "a backup vault"
      },
      {
        "id": "b",
        "text": "redundancy for storage1"
      },
      {
        "id": "c",
        "text": "lifecycle management for storage1"
      },
      {
        "id": "d",
        "text": "an Azure key vault"
      },
      {
        "id": "e",
        "text": "a Recovery Services vault"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Azure Key Vault can be configured to manage a storage account's access keys and automatically regenerate them on a defined rotation schedule, removing the need to manually rotate the keys."
  },
  {
    "id": "az104-2-106",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription that contains the Microsoft Entra identities shown in the following table. You need to enable self-service password reset (SSPR). For which identities can you enable SSPR in the Azure portal?",
    "choices": [
      {
        "id": "a",
        "text": "User1 only"
      },
      {
        "id": "b",
        "text": "Group1 only"
      },
      {
        "id": "c",
        "text": "User1 and Group1 only"
      },
      {
        "id": "d",
        "text": "Group1 and Group2 only"
      },
      {
        "id": "e",
        "text": "User1, Group1, and Group2"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Self-service password reset in the Azure portal is enabled tenant-wide (All) or for a defined scope (Selected), and the Selected scope can only be populated with security groups, not individual users directly, so only the groups can be targeted while User1 alone cannot."
  },
  {
    "id": "az104-2-110",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have a Microsoft Entra tenant named contoso.com. You collaborate with an external partner named fabrikam.com. You plan to invite users in fabrikam.com to the contoso.com tenant. You need to ensure that invitations can be sent only to fabrikam.com users. What should you do in the Microsoft Entra admin center?",
    "choices": [
      {
        "id": "a",
        "text": "From Cross-tenant access settings, configure the Tenant restrictions settings."
      },
      {
        "id": "b",
        "text": "From Cross-tenant access settings, configure the Microsoft cloud settings."
      },
      {
        "id": "c",
        "text": "From External collaboration settings, configure the Guest user access restrictions settings."
      },
      {
        "id": "d",
        "text": "From External collaboration settings, configure the Collaboration restrictions settings."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Collaboration restrictions (under External collaboration settings in the Microsoft Entra admin center) let you allow invitations only to specified domains, so limiting the allow-list to fabrikam.com ensures guest invitations can be sent only to users in that domain."
  },
  {
    "id": "az104-2-111",
    "type": "multi",
    "topic": "Storage",
    "prompt": "You have an Azure subscription that contains a storage account named storage1. The storage1 account contains blob data. You need to assign a role to a user named User1 to ensure that the user can access the blob data in storage1. The role assignment must support conditions. Which two roles can you assign to User1? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "Owner"
      },
      {
        "id": "b",
        "text": "Storage Account Contributor"
      },
      {
        "id": "c",
        "text": "Storage Account Backup Contributor"
      },
      {
        "id": "d",
        "text": "Storage Blob Data Contributor"
      },
      {
        "id": "e",
        "text": "Storage Blob Data Owner"
      },
      {
        "id": "f",
        "text": "Storage Blob Delegator"
      }
    ],
    "correctChoiceIds": [
      "d",
      "e"
    ],
    "explanation": "Azure attribute-based access control (ABAC) conditions on role assignments are currently supported only by the blob-data-specific built-in roles, Storage Blob Data Owner and Storage Blob Data Contributor; broader roles such as Owner or Storage Account Contributor do not support conditions."
  },
  {
    "id": "az104-2-114",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription that contains a storage account named storage. The storage account contains a blob that stores images. Client access to storage1 is granted by using a shared access signature (SAS). You need to ensure that users receive a warning message when they generate a SAS that exceeds a seven-day time period. What should you do for storage?",
    "choices": [
      {
        "id": "a",
        "text": "Enable a read-only lock."
      },
      {
        "id": "b",
        "text": "Configure an alert rule."
      },
      {
        "id": "c",
        "text": "Add a lifecycle management rule."
      },
      {
        "id": "d",
        "text": "Set Allow recommended upper limit for shared access signature (SAS) expiry interval to Enabled."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "The storage account setting Allow recommended upper limit for SAS expiry interval flags SAS tokens created in the portal that exceed the configured recommended duration, warning the user before they generate one that lasts longer than seven days."
  },
  {
    "id": "az104-3-3",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have Azure subscription that includes data in following locations:You plan to export data by using Azure import/export job named Export1. You need to identify the data that can be exported by using Export1. Which data should you identify?",
    "choices": [
      {
        "id": "a",
        "text": "DB1"
      },
      {
        "id": "b",
        "text": "container1"
      },
      {
        "id": "c",
        "text": "share1"
      },
      {
        "id": "d",
        "text": "Table1"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Azure Import/Export export job can only export data from Azure Blob storage containers; it does not support exporting Azure file shares, Table storage entities, or database data, so container1 is the only exportable source listed."
  },
  {
    "id": "az104-3-16",
    "type": "multi",
    "topic": "Storage",
    "prompt": "You have an Azure subscription that contains a storage account named account1. You plan to upload the disk files of a virtual machine to account1 from your on-premises network. The on-premises network uses a public IP address space of 131.107.1.0/24. You plan to use the disk files to provision an Azure virtual machine named VM1. VM1 will be attached to a virtual network named VNet1. VNet1 uses an IP address space of 192.168.0.0/24. You need to configure account1 to meet the following requirements: ensure that you can upload the disk files to account1; ensure that you can attach the disks to VM1; prevent all other access to account1. Which two actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "From the Networking blade of account1, select Selected networks."
      },
      {
        "id": "b",
        "text": "From the Networking blade of account1, select Allow trusted Microsoft services to access this storage account."
      },
      {
        "id": "c",
        "text": "From the Networking blade of account1, add the 131.107.1.0/24 IP address range."
      },
      {
        "id": "d",
        "text": "From the Networking blade of account1, add VNet1."
      },
      {
        "id": "e",
        "text": "From the Service endpoints blade of VNet1, add a service endpoint."
      }
    ],
    "correctChoiceIds": [
      "a",
      "c"
    ],
    "explanation": "Restricting account1 to Selected networks turns on the storage firewall, and adding the on-premises public IP range lets the upload from that network through while all other traffic is denied by default, satisfying both the upload requirement and the need to block everything else; VM1's managed disks can still be attached at the platform level once created."
  },
  {
    "id": "az104-3-19",
    "type": "multi",
    "topic": "Storage",
    "prompt": "You plan to use the Azure Import/Export service to copy files to a storage account. Which two files should you create before you prepare the drives for the import job? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "an XML manifest file"
      },
      {
        "id": "b",
        "text": "a dataset CSV file"
      },
      {
        "id": "c",
        "text": "a JSON configuration file"
      },
      {
        "id": "d",
        "text": "a PowerShell PS1 file"
      },
      {
        "id": "e",
        "text": "a driveset CSV file"
      }
    ],
    "correctChoiceIds": [
      "b",
      "e"
    ],
    "explanation": "The WAImportExport tool requires a driveset CSV file that lists the physical drives being prepared and a dataset CSV file that lists the files and folders to transfer; both must be created before you run the tool to format and encrypt the drives."
  },
  {
    "id": "az104-3-20",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have a Recovery Service vault that you use to test backups. The test backups contain two protected virtual machines. You need to delete the Recovery Services vault. What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "From the Recovery Service vault, delete the backup data."
      },
      {
        "id": "b",
        "text": "Modify the disaster recovery properties of each virtual machine."
      },
      {
        "id": "c",
        "text": "Modify the locks of each virtual machine."
      },
      {
        "id": "d",
        "text": "From the Recovery Service vault, stop the backup of each backup item."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "A Recovery Services vault cannot be deleted while it still contains backup items; you must first stop the backup (and delete the backup data) for each protected virtual machine, removing every backup item from the vault, before the vault itself can be deleted."
  },
  {
    "id": "az104-3-22",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
    "choices": [
      {
        "id": "a",
        "text": "a virtual machine"
      },
      {
        "id": "b",
        "text": "an Azure Cosmos DB database"
      },
      {
        "id": "c",
        "text": "Azure File Storage"
      },
      {
        "id": "d",
        "text": "the Azure File Sync Storage Sync Service"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Azure Import/Export jobs can import data into Azure Blob storage or Azure Files; of the listed options only Azure File Storage is a valid import destination, since VMs, Cosmos DB, and Azure File Sync's Storage Sync Service are not supported targets."
  },
  {
    "id": "az104-3-24",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure Storage account named storage1. You plan to use AzCopy to copy data to storage1. You need to identify the storage services in storage1 to which you can copy the data. Which storage services should you identify?",
    "choices": [
      {
        "id": "a",
        "text": "blob, file, table, and queue"
      },
      {
        "id": "b",
        "text": "blob and file only"
      },
      {
        "id": "c",
        "text": "file and table only"
      },
      {
        "id": "d",
        "text": "file only"
      },
      {
        "id": "e",
        "text": "blob, table, and queue only"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "AzCopy supports copying data to and from Blob storage and Azure Files only; it has no support for Table storage or Queue storage."
  },
  {
    "id": "az104-3-26",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure subscription that contains an Azure Storage account. You plan to create an Azure container instance named container1 that will use a Docker image named Image1. Image1 contains a Microsoft SQL Server instance that requires persistent storage. You need to configure a storage service for Container1. What should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Files"
      },
      {
        "id": "b",
        "text": "Azure Blob storage"
      },
      {
        "id": "c",
        "text": "Azure Queue storage"
      },
      {
        "id": "d",
        "text": "Azure Table storage"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Azure Container Instances can mount an Azure Files share as a volume, giving a container durable, persistent storage that survives container restarts; Blob, Table, and Queue storage cannot be mounted as a container file system."
  },
  {
    "id": "az104-3-27",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an app named App1 that runs on two Azure virtual machines named VM1 and VM2. You plan to implement an Azure Availability Set for App1. The solution must ensure that App1 is available during planned maintenance of the hardware hostingVM1 and VM2. What should you include in the Availability Set?",
    "choices": [
      {
        "id": "a",
        "text": "one update domain"
      },
      {
        "id": "b",
        "text": "two fault domains"
      },
      {
        "id": "c",
        "text": "one fault domain"
      },
      {
        "id": "d",
        "text": "two update domains"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Update domains, not fault domains, determine how VMs are grouped and rebooted one group at a time during planned host maintenance; spreading VM1 and VM2 across at least two update domains ensures one of them stays running while the other is serviced."
  },
  {
    "id": "az104-3-28",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
    "choices": [
      {
        "id": "a",
        "text": "an Azure Cosmos DB database"
      },
      {
        "id": "b",
        "text": "Azure Blob storage"
      },
      {
        "id": "c",
        "text": "Azure Data Lake Store"
      },
      {
        "id": "d",
        "text": "the Azure File Sync Storage Sync Service"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Of the choices given, only Azure Blob storage is a supported destination for an Azure Import/Export job; Cosmos DB, Data Lake Store, and the File Sync Storage Sync Service are not valid import targets."
  },
  {
    "id": "az104-3-34",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have two Azure virtual machines named VM1 and VM2. You have two Recovery Services vaults named RSV1 and RSV2. VM2 is backed up to RSV1. You need to back up VM2 to RSV2. What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "From the RSV1 blade, click Backup items and stop the VM2 backup"
      },
      {
        "id": "b",
        "text": "From the RSV2 blade, click Backup. From the Backup blade, select the backup for the virtual machine, and then click Backup"
      },
      {
        "id": "c",
        "text": "From the VM2 blade, click Disaster recovery, click Replication settings, and then select RSV2 as the Recovery Services vault"
      },
      {
        "id": "d",
        "text": "From the RSV1 blade, click Backup Jobs and export the VM2 job"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "A virtual machine can only be protected by one Recovery Services vault at a time, so VM2's existing backup in RSV1 must be stopped before backup can be configured for VM2 in RSV2."
  },
  {
    "id": "az104-3-35",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have a general-purpose v1 Azure Storage account named storage1 that uses locally-redundant storage (LRS). You need to ensure that the data in the storage account is protected if a zone fails. The solution must minimize costs and administrative effort. What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "Create a new storage account."
      },
      {
        "id": "b",
        "text": "Configure object replication rules."
      },
      {
        "id": "c",
        "text": "Upgrade the account to general-purpose v2."
      },
      {
        "id": "d",
        "text": "Modify the Replication setting of storage1."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Zone-redundant storage is only available for general-purpose v2 (and specialized) accounts, not general-purpose v1; storage1 must first be upgraded in place to general-purpose v2 before its replication can be changed to ZRS to protect against a zone failure."
  },
  {
    "id": "az104-3-37",
    "type": "single",
    "topic": "Storage",
    "prompt": "You create an Azure Storage account named contosostorage. You plan to create a file share named data. Users need to map a drive to the data file share from home computers that run Windows 10. Which outbound port should you open between the home computers and the data file share?",
    "choices": [
      {
        "id": "a",
        "text": "80"
      },
      {
        "id": "b",
        "text": "443"
      },
      {
        "id": "c",
        "text": "445"
      },
      {
        "id": "d",
        "text": "3389"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Azure Files uses the SMB protocol, which requires outbound TCP port 445 to be open from the client to the file share; without it, mapping a drive to an Azure file share over SMB fails."
  },
  {
    "id": "az104-3-38",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
    "choices": [
      {
        "id": "a",
        "text": "Azure File Storage"
      },
      {
        "id": "b",
        "text": "an Azure Cosmos DB database"
      },
      {
        "id": "c",
        "text": "Azure Data Factory"
      },
      {
        "id": "d",
        "text": "Azure SQL Database"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Of the options listed, Azure File Storage is a supported destination for an Azure Import/Export job; Cosmos DB, Data Factory, and Azure SQL Database are not valid import targets for this service."
  },
  {
    "id": "az104-3-41",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure Storage account named storage1 that contains a blob container named container1. You need to prevent new content added to container1 from being modified for one year. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "the access tier"
      },
      {
        "id": "b",
        "text": "an access policy"
      },
      {
        "id": "c",
        "text": "the Access control (IAM) settings"
      },
      {
        "id": "d",
        "text": "the access level"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "A container's Access policy blade in the Azure portal includes immutable blob storage settings where you can add a time-based retention policy; setting it to one year prevents any blob added during that period from being modified or deleted."
  },
  {
    "id": "az104-3-43",
    "type": "multi",
    "topic": "Storage",
    "prompt": "You are configuring Azure Active Directory (Azure AD) authentication for an Azure Storage account named storage1. You need to ensure that the members of a group named Group1 can upload files by using the Azure portal. The solution must use the principle of least privilege. Which two roles should you configure for storage1? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "Storage Account Contributor"
      },
      {
        "id": "b",
        "text": "Storage Blob Data Contributor"
      },
      {
        "id": "c",
        "text": "Reader"
      },
      {
        "id": "d",
        "text": "Contributor"
      },
      {
        "id": "e",
        "text": "Storage Blob Data Reader"
      }
    ],
    "correctChoiceIds": [
      "b",
      "c"
    ],
    "explanation": "Storage Blob Data Contributor grants read, write, and delete access to blob data itself, while the control-plane Reader role on the storage account lets the portal display and navigate to that account; together they let Group1 upload files through the portal without granting management rights over the account."
  },
  {
    "id": "az104-3-45",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an on-premises server that contains a folder named D:\\Folder1. You need to copy the contents of D:\\Folder1 to the public container in an Azure Storage account named contosodata. Which command should you run?",
    "choices": [
      {
        "id": "a",
        "text": "https://contosodata.blob.core.windows.net/public"
      },
      {
        "id": "b",
        "text": "azcopy sync D:\\folder1 https://contosodata.blob.core.windows.net/public --snapshot"
      },
      {
        "id": "c",
        "text": "azcopy copy D:\\folder1 https://contosodata.blob.core.windows.net/public --recursive"
      },
      {
        "id": "d",
        "text": "az storage blob copy start-batch D:\\Folder1 https://contosodata.blob.core.windows.net/public"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The azcopy copy command with the --recursive flag copies a local folder and all its subfolders to a destination container, which uploads the full contents of D:\\Folder1 to the public container in a single operation."
  },
  {
    "id": "az104-3-46",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription. In the Azure portal, you plan to create a storage account named storage1 that will have the following settings: Performance: Standard; Replication: Zone-redundant storage (ZRS); Access tier (default): Cool; Hierarchical namespace: Disabled. You need to ensure that you can set Account kind for storage1 to BlockBlobStorage. Which setting should you modify first?",
    "choices": [
      {
        "id": "a",
        "text": "Performance"
      },
      {
        "id": "b",
        "text": "Replication"
      },
      {
        "id": "c",
        "text": "Access tier (default)"
      },
      {
        "id": "d",
        "text": "Hierarchical namespace"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The BlockBlobStorage account kind is available only with the Premium performance tier, so storage1's Performance setting must be changed from Standard to Premium before BlockBlobStorage can be selected as the account kind."
  },
  {
    "id": "az104-3-48",
    "type": "single",
    "topic": "Storage",
    "prompt": "You create an Azure Storage account. You plan to add 10 blob containers to the storage account. For one of the containers, you need to use a different key to encrypt data at rest. What should you do before you create the container?",
    "choices": [
      {
        "id": "a",
        "text": "Generate a shared access signature (SAS)."
      },
      {
        "id": "b",
        "text": "Modify the minimum TLS version."
      },
      {
        "id": "c",
        "text": "Rotate the access keys."
      },
      {
        "id": "d",
        "text": "Create an encryption scope."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Creating an encryption scope lets you define a distinct encryption key for a specific container (or set of blobs) before that container is created, so one container can use a different key than the rest of the account."
  },
  {
    "id": "az104-3-51",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an on-premises server that contains a folder named D:\\Folder1. You need to copy the contents of D:\\Folder1 to the public container in an Azure Storage account named contosodata. Which command should you run?",
    "choices": [
      {
        "id": "a",
        "text": "az storage blob copy start D:\\Folder1 https://contosodata.blob.core.windows.net/public"
      },
      {
        "id": "b",
        "text": "azcopy sync D:\\folder1 https://contosodata.blob.core.windows.net/public --snapshot"
      },
      {
        "id": "c",
        "text": "azcopy copy D:\\folder1 https://contosodata.blob.core.windows.net/public --recursive"
      },
      {
        "id": "d",
        "text": "az storage blob copy start-batch D:\\Folder1 https://contosodata.blob.core.windows.net/public"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The azcopy copy command with --recursive uploads a folder and its entire contents to a blob container, which is what's needed to copy D:\\Folder1 to the public container."
  },
  {
    "id": "az104-3-54",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
    "choices": [
      {
        "id": "a",
        "text": "an Azure Cosmos DB database"
      },
      {
        "id": "b",
        "text": "Azure File Storage"
      },
      {
        "id": "c",
        "text": "Azure SQL Database"
      },
      {
        "id": "d",
        "text": "a virtual machine"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Of the choices given, Azure File Storage is a valid destination for an Azure Import/Export job; a Cosmos DB database, Azure SQL Database, and a virtual machine are not supported import targets."
  },
  {
    "id": "az104-3-57",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription that contains a storage account named storage1. You plan to create a blob container named container1. You need to use customer-managed key encryption for container1. Which key should you use?",
    "choices": [
      {
        "id": "a",
        "text": "an EC key that uses the P-384 curve only"
      },
      {
        "id": "b",
        "text": "an EC key that uses the P-521 curve only"
      },
      {
        "id": "c",
        "text": "an EC key that uses the P-384 curve or P-521 curve only"
      },
      {
        "id": "d",
        "text": "an RSA key with a key size of 4096 only"
      },
      {
        "id": "e",
        "text": "an RSA key type with a key size of 2048, 3072, or 4096 only"
      }
    ],
    "correctChoiceIds": [
      "e"
    ],
    "explanation": "Customer-managed key encryption for Azure Storage requires an RSA or RSA-HSM key with a size of 2048, 3072, or 4096 bits stored in Key Vault; elliptic-curve (EC) keys are not supported for this purpose."
  },
  {
    "id": "az104-3-60",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Blob Storage"
      },
      {
        "id": "b",
        "text": "Azure Data Lake Store"
      },
      {
        "id": "c",
        "text": "Azure SQL Database"
      },
      {
        "id": "d",
        "text": "a virtual machine"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Of the choices listed, Azure Blob Storage is a supported destination for an Azure Import/Export job; Data Lake Store, Azure SQL Database, and a virtual machine are not valid import targets."
  },
  {
    "id": "az104-3-63",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
    "choices": [
      {
        "id": "a",
        "text": "an Azure Cosmos DB database"
      },
      {
        "id": "b",
        "text": "Azure Data Lake Store"
      },
      {
        "id": "c",
        "text": "Azure Blob storage"
      },
      {
        "id": "d",
        "text": "Azure Data Factory"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Azure Blob storage is the supported destination among the choices for an Azure Import/Export job; Cosmos DB, Data Lake Store, and Data Factory cannot be used as an import destination."
  },
  {
    "id": "az104-3-65",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
    "choices": [
      {
        "id": "a",
        "text": "an Azure Cosmos DB database"
      },
      {
        "id": "b",
        "text": "Azure Blob Storage"
      },
      {
        "id": "c",
        "text": "Azure SQL Database"
      },
      {
        "id": "d",
        "text": "the Azure File Sync Storage Sync Service"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure Blob Storage is the valid import destination among the options given; Cosmos DB, Azure SQL Database, and the Azure File Sync Storage Sync Service are not supported targets for an Import/Export job."
  },
  {
    "id": "az104-3-66",
    "type": "single",
    "topic": "Storage",
    "prompt": "You plan to create an Azure Storage account named storage1 that will contain a file share named share1. You need to ensure that share1 can support SMB Multichannel. The solution must minimize costs. How should you configure storage?",
    "choices": [
      {
        "id": "a",
        "text": "Premium performance with locally-redundant storage (LRS)"
      },
      {
        "id": "b",
        "text": "Standard performance with zone-redundant storage (ZRS)"
      },
      {
        "id": "c",
        "text": "Premium performance with geo-redundant storage (GRS)"
      },
      {
        "id": "d",
        "text": "Standard performance with locally-redundant storage (LRS)"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "SMB Multichannel for Azure Files requires a premium file share (FileStorage account kind), which only supports locally-redundant storage; choosing Premium performance with LRS is therefore the lowest-cost configuration that still supports the feature."
  },
  {
    "id": "az104-3-67",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Data Lake Store"
      },
      {
        "id": "b",
        "text": "Azure File Storage"
      },
      {
        "id": "c",
        "text": "Azure SQL Database"
      },
      {
        "id": "d",
        "text": "the Azure File Sync Storage Sync Service"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure File Storage is the supported destination among the choices for an Azure Import/Export job; Data Lake Store, Azure SQL Database, and the File Sync Storage Sync Service cannot be used as import targets."
  },
  {
    "id": "az104-3-68",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription that contains a storage account named storage1. You plan to use conditions when assigning role-based access control (RBAC) roles to storage1. Which storage1 services support conditions when assigning roles?",
    "choices": [
      {
        "id": "a",
        "text": "containers only"
      },
      {
        "id": "b",
        "text": "file shares only"
      },
      {
        "id": "c",
        "text": "tables only"
      },
      {
        "id": "d",
        "text": "queues only"
      },
      {
        "id": "e",
        "text": "containers and queues only"
      },
      {
        "id": "f",
        "text": "files shares and tables only"
      }
    ],
    "correctChoiceIds": [
      "e"
    ],
    "explanation": "Azure RBAC role-assignment conditions (attribute-based access control) are currently supported only for the Blob storage service, including container-scoped conditions, and for Queue storage; file shares and tables do not support conditions."
  },
  {
    "id": "az104-3-70",
    "type": "single",
    "topic": "Storage",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Storage account named storage1. You need to enable a user named User1 to list and regenerate storage account keys for storage1. Solution: You assign the Storage Account Encryption Scope Contributor Role to User1. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Storage Account Encryption Scope Contributor role only grants permission to manage encryption scopes; it does not include the actions needed to list or regenerate the storage account's access keys, so it does not meet the goal."
  },
  {
    "id": "az104-3-73",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure Storage account that contains 5,000 blobs accessed by multiple users. You need to ensure that the users can view only specific blobs based on blob index tags. What should you include in the solution?",
    "choices": [
      {
        "id": "a",
        "text": "a role assignment condition"
      },
      {
        "id": "b",
        "text": "a stored access policy"
      },
      {
        "id": "c",
        "text": "just-in-time (JIT) VM access"
      },
      {
        "id": "d",
        "text": "a shared access signature (SAS)"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "A role assignment condition can restrict access based on a blob's index tags, so scoping a role like Storage Blob Data Reader with a condition on specific tag values lets each user see only the blobs whose tags match, without needing separate role assignments per blob."
  },
  {
    "id": "az104-3-74",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure Storage account named storage1. For storage1, you create an encryption scope named Scope1. Which storage types can you encrypt by using Scope?",
    "choices": [
      {
        "id": "a",
        "text": "file shares only"
      },
      {
        "id": "b",
        "text": "containers only"
      },
      {
        "id": "c",
        "text": "file shares and containers only"
      },
      {
        "id": "d",
        "text": "containers and tables only"
      },
      {
        "id": "e",
        "text": "file shares, containers, and tables only"
      },
      {
        "id": "f",
        "text": "file shares, containers, tables, and queues"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Encryption scopes in Azure Storage apply only to the Blob service (containers and blobs); they cannot be used to encrypt file shares, tables, or queues."
  },
  {
    "id": "az104-3-76",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Data Factory"
      },
      {
        "id": "b",
        "text": "the Azure File Sync Storage Sync Service"
      },
      {
        "id": "c",
        "text": "Azure File Storage"
      },
      {
        "id": "d",
        "text": "Azure SQL Database"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Azure File Storage is the valid destination among the choices for an Azure Import/Export job; Data Factory, the File Sync Storage Sync Service, and Azure SQL Database are not supported import targets."
  },
  {
    "id": "az104-3-78",
    "type": "multi",
    "topic": "Compute",
    "prompt": "You have an Azure virtual machine named VM1 and an Azure key vault named Vault1. On VM1, you plan to configure Azure Disk Encryption to use a key encryption key (KEK). You need to prepare Vault1 for Azure Disk Encryption. Which two actions should you perform on Vault1? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "Select Azure Virtual machines for deployment."
      },
      {
        "id": "b",
        "text": "Create a new key."
      },
      {
        "id": "c",
        "text": "Create a new secret."
      },
      {
        "id": "d",
        "text": "Configure a key rotation policy."
      },
      {
        "id": "e",
        "text": "Select Azure Disk Encryption for volume encryption."
      }
    ],
    "correctChoiceIds": [
      "b",
      "e"
    ],
    "explanation": "Preparing a key vault for Azure Disk Encryption with a key encryption key requires creating a key in the vault to serve as the KEK, and enabling the vault's Azure Disk Encryption for volume encryption access policy so the VM agent can retrieve keys and secrets during encryption."
  },
  {
    "id": "az104-3-79",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure subscription that contains a virtual machine named VM1 and an Azure key vault named KV1. You need to configure encryption for VM1. The solution must meet the following requirements: store and use the encryption key in KV1; maintain encryption if VM1 is downloaded from Azure; encrypt both the operating system disk and the data disks. Which encryption method should you use?",
    "choices": [
      {
        "id": "a",
        "text": "customer-managed keys"
      },
      {
        "id": "b",
        "text": "Confidential disk encryption"
      },
      {
        "id": "c",
        "text": "Azure Disk Encryption"
      },
      {
        "id": "d",
        "text": "encryption at host"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Azure Disk Encryption performs guest-OS-level encryption (BitLocker on Windows, DM-Crypt on Linux) of both the OS and data disks using a key stored in a customer key vault, and the encryption stays in place even if the VHD is exported or downloaded, unlike encryption at host or platform-managed SSE, which apply only while the disk stays in the Azure storage platform."
  },
  {
    "id": "az104-3-81",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a container named container1. You need to configure access to container1. The solution must meet the following requirements: only allow read access; allow both HTTP and HTTPS protocols; apply access permissions to all the content in the container. What should you use?",
    "choices": [
      {
        "id": "a",
        "text": "an access policy"
      },
      {
        "id": "b",
        "text": "a shared access signature (SAS)"
      },
      {
        "id": "c",
        "text": "Azure Content Delivery Network (CDN)"
      },
      {
        "id": "d",
        "text": "access keys"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "A shared access signature generated at the container level can be scoped to read-only permissions, allowed over both HTTP and HTTPS, and applied to every blob in the container, matching all three requirements; an access policy alone only manages SAS parameters and doesn't grant access by itself."
  },
  {
    "id": "az104-3-82",
    "type": "multi",
    "topic": "Storage",
    "prompt": "You need to create an Azure Storage account named storage1. The solution must meet the following requirements: support Azure Data Lake Storage; minimize costs for infrequently accessed data; automatically replicate data to a secondary Azure region. Which three options should you configure for storage1? Each correct answer presents part of the solution. NOTE: Each correct answer is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "zone-redundant storage (ZRS)"
      },
      {
        "id": "b",
        "text": "the Cool access tire"
      },
      {
        "id": "c",
        "text": "geo-redundant storage (GRS)"
      },
      {
        "id": "d",
        "text": "the Hot access tier"
      },
      {
        "id": "e",
        "text": "hierarchical namespace"
      }
    ],
    "correctChoiceIds": [
      "b",
      "c",
      "e"
    ],
    "explanation": "Hierarchical namespace turns the account into a Data Lake Storage Gen2 account, geo-redundant storage (GRS) automatically replicates data to a secondary region, and the Cool access tier minimizes the cost of storing infrequently accessed data, together meeting all three requirements."
  },
  {
    "id": "az104-3-84",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription that contains the storage accounts shown in the following table. Which storage account can be converted to zone-redundant storage (ZRS) replication?",
    "choices": [
      {
        "id": "a",
        "text": "storage1"
      },
      {
        "id": "b",
        "text": "storage2"
      },
      {
        "id": "c",
        "text": "storage3"
      },
      {
        "id": "d",
        "text": "storage4"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Only a general-purpose v2 storage account in a region that supports zone-redundant storage, without configuration that's incompatible with ZRS, can be converted to ZRS; based on the account properties shown, storage2 is the only one that meets those conditions."
  },
  {
    "id": "az104-3-86",
    "type": "single",
    "topic": "Storage",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Storage account named storage1. You need to enable a user named User1 to list and regenerate storage account keys for storage1. Solution: You assign the Storage Account Key Operator Service Role to User1. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The Storage Account Key Operator Service Role includes the listkeys and regeneratekey actions, so assigning it to User1 lets them both list and regenerate storage1's account keys, meeting the goal."
  },
  {
    "id": "az104-3-93",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription that contains the storage accounts shown in the following table. Which storage account can be converted to zone-redundant storage (ZRS) replication?",
    "choices": [
      {
        "id": "a",
        "text": "storage1 only"
      },
      {
        "id": "b",
        "text": "storage2 only"
      },
      {
        "id": "c",
        "text": "storage3 only"
      },
      {
        "id": "d",
        "text": "storage2 and storage3"
      },
      {
        "id": "e",
        "text": "storage1, storage2, and storage3"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Only storage1 meets the account-type, region, and configuration requirements needed to convert its replication setting to zone-redundant storage; the other accounts shown have properties (such as account kind, region, or an incompatible feature) that rule out ZRS."
  },
  {
    "id": "az104-3-94",
    "type": "single",
    "topic": "Storage",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure Storage account named storage1. You need to enable a user named User1 to list and regenerate storage account keys for storage1. Solution: You assign the Reader and Data Access role to User1. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Reader and Data Access role lets a user retrieve the storage account's connection string and list its access keys, but it does not include the regeneratekey action, so it cannot be used to regenerate the keys and does not fully meet the goal."
  },
  {
    "id": "az104-3-95",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure subscription that contains a Standard SKU Azure container registry named ContReg1. You need to ensure that ContReg1 supports geo-replication. What should you do first for ContReg1?",
    "choices": [
      {
        "id": "a",
        "text": "Enable Admin user."
      },
      {
        "id": "b",
        "text": "Add a scope map."
      },
      {
        "id": "c",
        "text": "Add an automation task."
      },
      {
        "id": "d",
        "text": "Create a cache rule."
      },
      {
        "id": "e",
        "text": "Upgrade the SKU."
      }
    ],
    "correctChoiceIds": [
      "e"
    ],
    "explanation": "Geo-replication is a feature of the Premium Azure Container Registry SKU; ContReg1 must first be upgraded from Standard to Premium before additional regions can be added for replication."
  },
  {
    "id": "az104-4-1",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You deploy an Azure Kubernetes Service (AKS) cluster named AKS1. You need to deploy a YAML file to AKS1. Solution: From Azure CLI, you run az aks. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The az aks command group manages the AKS cluster resource itself (creating, scaling, upgrading), not the Kubernetes objects running inside it, so it cannot be used to apply a YAML manifest to the cluster."
  },
  {
    "id": "az104-4-2",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You deploy an Azure Kubernetes Service (AKS) cluster named AKS1. You need to deploy a YAML file to AKS1. Solution: From Azure CLI, you run the kubectl client. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "kubectl is the standard Kubernetes command-line client, and running kubectl apply (or similar) against AKS1's API server is exactly how a YAML manifest is deployed to the cluster, so this meets the goal."
  },
  {
    "id": "az104-4-3",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You deploy an Azure Kubernetes Service (AKS) cluster named AKS1. You need to deploy a YAML file to AKS1. Solution: From Azure CLI, you run azcopy. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "azcopy is a data-transfer utility for copying data to and from Azure Storage; it has no ability to communicate with a Kubernetes API server, so it cannot deploy a YAML manifest to AKS1."
  },
  {
    "id": "az104-4-4",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour. Solution: You create an Azure storage account and configure shared access signatures (SASs). You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the storage account as the source. Does that meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure Monitor alerts need to be based on the VM's collected log or metric data, typically ingested into a Log Analytics workspace via the monitoring agent; pointing an alert at a storage account (used only for agent connection configuration via SAS) does not give Azure Monitor access to the System event log content, so it cannot trigger on the specified event count."
  },
  {
    "id": "az104-4-6",
    "type": "single",
    "topic": "Compute",
    "prompt": "You download an Azure Resource Manager template based on an existing virtual machine. The template will be used to deploy 100 virtual machines. You need to modify the template to reference an administrative password. You must prevent the password from being stored in plain text. What should you create to store the password?",
    "choices": [
      {
        "id": "a",
        "text": "an Azure Key Vault and an access policy"
      },
      {
        "id": "b",
        "text": "an Azure Storage account and an access policy"
      },
      {
        "id": "c",
        "text": "a Recovery Services vault and a backup policy"
      },
      {
        "id": "d",
        "text": "Azure Active Directory (AD) Identity Protection and an Azure policy"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "ARM templates can reference a secret stored in Azure Key Vault as a secure parameter at deployment time (with an access policy granting the deploying principal permission to read it), so the administrative password is pulled from Key Vault during deployment instead of being embedded in the template as plain text."
  },
  {
    "id": "az104-4-9",
    "type": "multi",
    "topic": "Compute",
    "prompt": "You plan to automate the deployment of a virtual machine scale set that uses the Windows Server 2016 Datacenter image. You need to ensure that when the scale set virtual machines are provisioned, they have web server components installed. Which two actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "Upload a configuration script"
      },
      {
        "id": "b",
        "text": "Create an automation account"
      },
      {
        "id": "c",
        "text": "Create an Azure policy"
      },
      {
        "id": "d",
        "text": "Modify the extensionProfile section of the Azure Resource Manager template"
      },
      {
        "id": "e",
        "text": "Create a new virtual machine scale set in the Azure portal"
      }
    ],
    "correctChoiceIds": [
      "a",
      "d"
    ],
    "explanation": "A Custom Script Extension referenced in the extensionProfile section of the scale set's ARM template runs an uploaded configuration script on every instance as it's provisioned, which is how the web server components get installed automatically at scale-out time."
  },
  {
    "id": "az104-4-12",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure Resource Manager template named Template1 that is used to deploy an Azure virtual machine. Template1 contains the following text:The variables section in Template1 contains the following text:\"location\": \"westeurope\"The resources section in Template1 contains the following text:You need to deploy the virtual machine to the West US location by using Template1. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Modify the location in the resources section to westus"
      },
      {
        "id": "b",
        "text": "Select West US during the deployment"
      },
      {
        "id": "c",
        "text": "Modify the location in the variables section to westus"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The virtual machine resource's location property in the resources section is what actually determines where it's deployed; since that value is set independently of (and overrides) the unused location variable, you must edit the location in the resources section directly to deploy to West US."
  },
  {
    "id": "az104-4-13",
    "type": "single",
    "topic": "Compute",
    "prompt": "You create an App Service plan named Plan1 and an Azure web app named webapp1. You discover that the option to create a staging slot is unavailable. You need to create a staging slot for Plan1. What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "From Plan1, scale up the App Service plan"
      },
      {
        "id": "b",
        "text": "From webapp1, modify the Application settings"
      },
      {
        "id": "c",
        "text": "From webapp1, add a custom domain"
      },
      {
        "id": "d",
        "text": "From Plan1, scale out the App Service plan"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Deployment slots require the App Service plan to be running at Standard tier or higher; Free, Shared, and Basic tiers don't support slots, so Plan1 must be scaled up to a qualifying tier before a staging slot becomes available."
  },
  {
    "id": "az104-4-14",
    "type": "single",
    "topic": "Compute",
    "prompt": "You plan to move a distributed on-premises app named App1 to an Azure subscription. After the planned move, App1 will be hosted on several Azure virtual machines. You need to ensure that App1 always runs on at least eight virtual machines during planned Azure maintenance. What should you create?",
    "choices": [
      {
        "id": "a",
        "text": "one virtual machine scale set that has 10 virtual machines instances"
      },
      {
        "id": "b",
        "text": "one Availability Set that has three fault domains and one update domain"
      },
      {
        "id": "c",
        "text": "one Availability Set that has 10 update domains and one fault domain"
      },
      {
        "id": "d",
        "text": "one virtual machine scale set that has 12 virtual machines instances"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "A virtual machine scale set with extra capacity (10 instances) can roll through planned maintenance one update domain at a time while still keeping at least 8 instances running, which a single Availability Set with only two VMs cannot guarantee."
  },
  {
    "id": "az104-4-15",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour. Solution: You create an event subscription on VM1. You create an alert in Azure Monitor and specify VM1 as the source. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "An Event Grid event subscription delivers Azure resource management and lifecycle events, not the contents of a guest OS's Windows System event log, so it cannot be used as the source for an alert that reacts to error events logged inside VM1."
  },
  {
    "id": "az104-4-16",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the Overview blade, you move the virtual machine to a different subscription. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Moving a VM to a different subscription is a resource-management operation that doesn't change the physical host it runs on, so it does nothing to get VM1 off hardware that's scheduled for maintenance."
  },
  {
    "id": "az104-4-17",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the Redeploy blade, you click Redeploy. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Redeploying a VM shuts it down, moves it to a new physical host in the Azure datacenter, and restarts it while preserving its configuration and disks, which immediately gets VM1 off the host affected by the upcoming maintenance."
  },
  {
    "id": "az104-4-18",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the Update management blade, you click Enable. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Update Management configures OS patch scheduling and tracking for the VM; it has no effect on which physical host the VM is running on, so enabling it does not move VM1 off hardware facing maintenance."
  },
  {
    "id": "az104-4-19",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure subscription that contains a web app named webapp1. You need to add a custom domain named www.contoso.com to webapp1. What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "Create a DNS record"
      },
      {
        "id": "b",
        "text": "Add a connection string"
      },
      {
        "id": "c",
        "text": "Upload a certificate."
      },
      {
        "id": "d",
        "text": "Stop webapp1."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Before Azure will accept a custom domain on a web app, you must first create a DNS record (a CNAME or A record, alongside a verification record) at the domain's DNS provider that points to webapp1; Azure validates this record when you add the custom domain."
  },
  {
    "id": "az104-4-26",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have a deployment template named Template1 that is used to deploy 10 Azure web apps. You need to identify what to deploy before you deploy Template1. The solution must minimize Azure costs. What should you identify?",
    "choices": [
      {
        "id": "a",
        "text": "five Azure Application Gateways"
      },
      {
        "id": "b",
        "text": "one App Service plan"
      },
      {
        "id": "c",
        "text": "10 App Service plans"
      },
      {
        "id": "d",
        "text": "one Azure Traffic Manager"
      },
      {
        "id": "e",
        "text": "one Azure Application Gateway"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Multiple web apps can be hosted on a single App Service plan, sharing its compute capacity; deploying one shared plan for all 10 web apps instead of a plan per app is the lowest-cost configuration that still supports the deployment."
  },
  {
    "id": "az104-4-28",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure subscription that contains a virtual machine named VM1. VM1 hosts a line-of-business application that is available 24 hours a day. VM1 has one network interface and one managed disk. VM1 uses the D4s v3 size. You plan to make the following changes to VM1:; Change the size to D8s v3.; Add a 500-GB managed disk.; Add the Puppet Agent extension.; Enable Desired State Configuration Management. Which change will cause downtime for VM1?",
    "choices": [
      {
        "id": "a",
        "text": "Enable Desired State Configuration Management"
      },
      {
        "id": "b",
        "text": "Add a 500-GB managed disk"
      },
      {
        "id": "c",
        "text": "Change the size to D8s v3"
      },
      {
        "id": "d",
        "text": "Add the Puppet Agent extension"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Resizing a running VM to a size not available on its current hardware cluster forces Azure to deallocate and restart the VM, causing downtime; adding a data disk (hot-add) and installing extensions like the Puppet Agent or Desired State Configuration do not require a reboot."
  },
  {
    "id": "az104-4-30",
    "type": "multi",
    "topic": "Networking",
    "prompt": "You have an Azure subscription named Subscription1 that has the following providers registered:; Authorization; Automation; Resources; Compute; KeyVault; Network; Storage; Billing; Web. Subscription1 contains an Azure virtual machine named VM1 that has the following configurations:; Private IP address: 10.0.0.4 (dynamic); Network security group (NSG): NSG1; Public IP address: None; Availability set: AVSet; Subnet: 10.0.0.0/24; Managed disks: No; Location: East USYou need to record all the successful and failed connection attempts to VM1. Which three actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "Enable Azure Network Watcher in the East US Azure region."
      },
      {
        "id": "b",
        "text": "Add an Azure Network Watcher connection monitor."
      },
      {
        "id": "c",
        "text": "Register the MicrosoftLogAnalytics provider."
      },
      {
        "id": "d",
        "text": "Create an Azure Storage account."
      },
      {
        "id": "e",
        "text": "Register the Microsoft.Insights resource provider."
      },
      {
        "id": "f",
        "text": "Enable Azure Network Watcher flow logs."
      }
    ],
    "correctChoiceIds": [
      "d",
      "e",
      "f"
    ],
    "explanation": "NSG flow logs (via Azure Network Watcher) record allowed and denied connections to and from a resource, but they need a storage account as the log destination and the Microsoft.Insights resource provider registered for the underlying diagnostics pipeline; the subscription already has Network Watcher's own prerequisites but is missing these two pieces, plus flow logging itself must be turned on."
  },
  {
    "id": "az104-4-31",
    "type": "single",
    "topic": "Compute",
    "prompt": "You need to deploy an Azure virtual machine scale set that contains five instances as quickly as possible. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Deploy five virtual machines. Modify the Availability Zones settings for each virtual machine."
      },
      {
        "id": "b",
        "text": "Deploy five virtual machines. Modify the Size setting for each virtual machine."
      },
      {
        "id": "c",
        "text": "Deploy one virtual machine scale set that is set to VM (virtual machines) orchestration mode."
      },
      {
        "id": "d",
        "text": "Deploy one virtual machine scale set that is set to ScaleSetVM orchestration mode."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "A single virtual machine scale set provisions all requested instances together in one deployment operation, which is far faster than creating and configuring five standalone virtual machines one at a time."
  },
  {
    "id": "az104-4-34",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates. You need to view the date and time when the resources were created in RG1. Solution: From the Subscriptions blade, you select the subscription, and then click Programmatic deployment. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Programmatic deployment page under Subscriptions only surfaces subscription-level deployment and quota information; it does not list the individual resources in RG1 or when each was created. The Deployments history on the resource group itself is what shows that."
  },
  {
    "id": "az104-4-41",
    "type": "multi",
    "topic": "Compute",
    "prompt": "You have an Azure Kubernetes Service (AKS) cluster named AKS1. You need to configure cluster autoscaler for AKS1. Which two tools should you use? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "the kubectl command"
      },
      {
        "id": "b",
        "text": "the az aks command"
      },
      {
        "id": "c",
        "text": "the Set-AzVm cmdlet"
      },
      {
        "id": "d",
        "text": "the Azure portal"
      },
      {
        "id": "e",
        "text": "the Set-AzAks cmdlet"
      }
    ],
    "correctChoiceIds": [
      "b",
      "d"
    ],
    "explanation": "Cluster autoscaler for an AKS node pool can be enabled and tuned either with the `az aks` CLI commands (e.g. `az aks update --enable-cluster-autoscaler`) or through the Azure portal's node pool scaling settings; kubectl manages Kubernetes objects, not the AKS-managed autoscaler add-on, and there is no Set-AzAks cmdlet for this."
  },
  {
    "id": "az104-4-42",
    "type": "single",
    "topic": "Compute",
    "prompt": "You create the following resources in an Azure subscription:; An Azure Container Registry instance named Registry1; An Azure Kubernetes Service (AKS) cluster named Cluster1. You create a container image named App1 on your administrative workstation. You need to deploy App1 to Cluster1. What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "Run the docker push command."
      },
      {
        "id": "b",
        "text": "Create an App Service plan."
      },
      {
        "id": "c",
        "text": "Run the az acr build command."
      },
      {
        "id": "d",
        "text": "Run the az aks create command."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Before Cluster1 can pull and run App1, the image built on the workstation must first be pushed to Registry1 with `docker push`; only after the image exists in the registry can it be referenced in a Kubernetes deployment."
  },
  {
    "id": "az104-4-44",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates. You need to view the date and time when the resources were created in RG1. Solution: From the Subscriptions blade, you select the subscription, and then click Resource providers. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Resource providers blade lists which Azure resource provider namespaces (Microsoft.Compute, Microsoft.Storage, etc.) are registered for the subscription; it has nothing to do with when individual resources in RG1 were created."
  },
  {
    "id": "az104-4-45",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates. You need to view the date and time when the resources were created in RG1. Solution: From the RG1 blade, you click Automation script. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Automation script on a resource group generates a downloadable ARM template/script representing the current resource configuration; it does not display resource creation timestamps."
  },
  {
    "id": "az104-4-46",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates. You need to view the date and time when the resources were created in RG1. Solution: From the RG1 blade, you click Deployments. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The Deployments blade on a resource group lists every template deployment made to that group along with its timestamp, which directly shows when the resources in RG1 were created."
  },
  {
    "id": "az104-4-47",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription named Subscription1. You deploy a Linux virtual machine named VM1 to Subscription1. You need to monitor the metrics and the logs of VM1. What should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Azure HDInsight"
      },
      {
        "id": "b",
        "text": "Linux Diagnostic Extension (LAD) 3.0"
      },
      {
        "id": "c",
        "text": "the AzurePerformanceDiagnostics extension"
      },
      {
        "id": "d",
        "text": "Azure Analysis Services"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Linux Diagnostic Extension (LAD 3.0) collects syslog entries, performance metrics, and custom logs from a Linux VM and forwards them to Azure Storage/Azure Monitor, which is exactly what's needed to monitor VM1's metrics and logs."
  },
  {
    "id": "az104-4-49",
    "type": "single",
    "topic": "Compute",
    "prompt": "You plan to deploy three Azure virtual machines named VM1, VM2, and VM3. The virtual machines will host a web app named App1. You need to ensure that at least two virtual machines are available if a single Azure datacenter becomes unavailable. What should you deploy?",
    "choices": [
      {
        "id": "a",
        "text": "all three virtual machines in a single Availability Zone"
      },
      {
        "id": "b",
        "text": "all virtual machines in a single Availability Set"
      },
      {
        "id": "c",
        "text": "each virtual machine in a separate Availability Zone"
      },
      {
        "id": "d",
        "text": "each virtual machine in a separate Availability Set"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Availability Zones are physically separate datacenters (with independent power, cooling, and networking) within a region, so placing each VM in a different zone means the loss of one datacenter still leaves the other VMs running. An Availability Set only protects against failures within a single datacenter, not the loss of the datacenter itself."
  },
  {
    "id": "az104-4-50",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure virtual machine named VM1 that runs Windows Server 2019. You save VM1 as a template named Template1 to the Azure Resource Manager library. You plan to deploy a virtual machine named VM2 from Template1. What can you configure during the deployment of VM2?",
    "choices": [
      {
        "id": "a",
        "text": "operating system"
      },
      {
        "id": "b",
        "text": "administrator username"
      },
      {
        "id": "c",
        "text": "virtual machine size"
      },
      {
        "id": "d",
        "text": "resource group"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "A VM saved as a Resource Manager template fixes the captured OS image and configuration; the deployment wizard for the new VM lets you choose fresh values like which resource group to deploy VM2 into, but not a different OS."
  },
  {
    "id": "az104-4-51",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure subscription that contains an Azure virtual machine named VM1. VM1 runs a financial reporting app named App1 that does not support multiple active instances. At the end of each month, CPU usage for VM1 peaks when App1 runs. You need to create a scheduled runbook to increase the processor performance of VM1 at the end of each month. What task should you include in the runbook?",
    "choices": [
      {
        "id": "a",
        "text": "Add the Azure Performance Diagnostics agent to VM1."
      },
      {
        "id": "b",
        "text": "Modify the VM size property of VM1."
      },
      {
        "id": "c",
        "text": "Add VM1 to a scale set."
      },
      {
        "id": "d",
        "text": "Increase the vCPU quota for the subscription."
      },
      {
        "id": "e",
        "text": "Add a Desired State Configuration (DSC) extension to VM1."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Because App1 doesn't support multiple concurrent instances, scaling out is not an option, so the runbook must scale up instead - changing VM1's Size property to a bigger SKU increases available vCPU/RAM for the month-end workload."
  },
  {
    "id": "az104-4-52",
    "type": "single",
    "topic": "Compute",
    "prompt": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Deployment Center in Azure App Service"
      },
      {
        "id": "b",
        "text": "A Desired State Configuration (DSC) extension"
      },
      {
        "id": "c",
        "text": "the New-AzConfigurationAssignment cmdlet"
      },
      {
        "id": "d",
        "text": "a Microsoft Intune device configuration profile"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "A Desired State Configuration (DSC) extension referenced in the ARM template runs on every instance as the scale set deploys, so it can install and configure NGINX consistently across all the Windows Server 2019 instances."
  },
  {
    "id": "az104-4-55",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure virtual machine named VM1 that runs Windows Server 2019. The VM was deployed using default drive settings. You sign in to VM1 as a user named User1 and perform the following actions:; Create files on drive C.; Create files on drive D.; Modify the screen saver timeout.; Change the desktop background. You plan to redeploy VM1. Which changes will be lost after you redeploy VM1?",
    "choices": [
      {
        "id": "a",
        "text": "the modified screen saver timeout"
      },
      {
        "id": "b",
        "text": "the new desktop background"
      },
      {
        "id": "c",
        "text": "the new files on drive D"
      },
      {
        "id": "d",
        "text": "the new files on drive C"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Drive D on an Azure Windows VM is the temporary (ephemeral) disk that lives on the local host storage; when the VM is redeployed it moves to a different physical host and the temporary disk is recreated empty, so files written there are lost. The OS disk (drive C) and its registry-stored settings, such as the screen saver timeout and desktop background, persist because they're stored on the durable managed OS disk."
  },
  {
    "id": "az104-4-59",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure web app named App1. App1 has the deployment slots shown in the following table: In webapp1-test, you test several changes to App1. You back up App1. You swap webapp1-test for webapp1-prod and discover that App1 is experiencing performance issues. You need to revert to the previous version of App1 as quickly as possible. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Redeploy App1"
      },
      {
        "id": "b",
        "text": "Swap the slots"
      },
      {
        "id": "c",
        "text": "Clone App1"
      },
      {
        "id": "d",
        "text": "Restore the backup of App1"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Swapping the slots again is the fastest rollback: it just re-points production traffic back to the previous, still-running version in webapp1-test without needing to redeploy code or restore a backup."
  },
  {
    "id": "az104-4-61",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You plan to back up an Azure virtual machine named VM1. You discover that the Backup Pre-Check status displays a status of Warning. What is a possible cause of the Warning status?",
    "choices": [
      {
        "id": "a",
        "text": "VM1 is stopped."
      },
      {
        "id": "b",
        "text": "VM1 does not have the latest version of the Azure VM Agent (WaAppAgent.exe) installed."
      },
      {
        "id": "c",
        "text": "VM1 has an unmanaged disk."
      },
      {
        "id": "d",
        "text": "A Recovery Services vault is unavailable."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure Backup's pre-check reports a Warning status (rather than a hard failure) when the Azure VM Agent (WaAppAgent.exe) on the VM is out of date, since an outdated agent can interfere with the snapshot/backup extension's operation."
  },
  {
    "id": "az104-4-62",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the Overview blade, you move the virtual machine to a different resource group. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Moving a VM to a different resource group is purely a management-plane/organizational change - it does not migrate the VM's compute allocation to different physical hardware, so it does nothing to get VM1 off hardware scheduled for maintenance."
  },
  {
    "id": "az104-4-64",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour. Solution: You create an Azure Log Analytics workspace and configure the Agent configuration settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "This is a complete, valid pipeline: the Microsoft Monitoring Agent installed on VM1 forwards Windows System event log data into the Log Analytics workspace, and an Azure Monitor alert rule can then fire when a log query counts more than two Error events within an hour."
  },
  {
    "id": "az104-4-67",
    "type": "single",
    "topic": "Compute",
    "prompt": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?",
    "choices": [
      {
        "id": "a",
        "text": "the New-AzConfigurationAssignment cmdlet"
      },
      {
        "id": "b",
        "text": "a Desired State Configuration (DSC) extension"
      },
      {
        "id": "c",
        "text": "Azure Active Directory (Azure AD) Application Proxy"
      },
      {
        "id": "d",
        "text": "Azure Application Insights"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "A Desired State Configuration (DSC) extension applied through the ARM template runs on every scale set instance during deployment, installing and configuring NGINX consistently across all of them."
  },
  {
    "id": "az104-4-69",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some questions sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You deploy an Azure Kubernetes Service (AKS) cluster named AKS1. You need to deploy a YAML file to AKS1. Solution: From Azure Cloud Shell, you run az aks. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "`az aks` commands manage the AKS cluster resource itself (credentials, scaling, upgrades, and so on); deploying a Kubernetes manifest requires `kubectl apply -f` against the cluster after retrieving its credentials, not a plain `az aks` invocation."
  },
  {
    "id": "az104-4-71",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour. Solution: You create an Azure Log Analytics workspace and configure the data settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Installing the Microsoft Monitoring Agent on VM1 and configuring the Log Analytics workspace's data settings to collect System event log entries gives Azure Monitor the data it needs; an alert rule against that workspace can then trigger when more than two Error events appear within an hour."
  },
  {
    "id": "az104-4-77",
    "type": "single",
    "topic": "Compute",
    "prompt": "You develop the following Azure Resource Manager (ARM) template to create a resource group and deploy an Azure Storage account to the resource group. Which cmdlet should you run to deploy the template?",
    "choices": [
      {
        "id": "a",
        "text": "New-AzResource"
      },
      {
        "id": "b",
        "text": "New-AzResourceGroupDeployment"
      },
      {
        "id": "c",
        "text": "New-AzTenantDeployment"
      },
      {
        "id": "d",
        "text": "New-AzDeployment"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "A template that itself creates a resource group targets subscription scope, which requires the New-AzDeployment cmdlet (subscription-level deployment); New-AzResourceGroupDeployment only deploys into a resource group that already exists, so it can't be used here."
  },
  {
    "id": "az104-4-79",
    "type": "single",
    "topic": "Compute",
    "prompt": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?",
    "choices": [
      {
        "id": "a",
        "text": "the Publish-AzVMDscConfiguration cmdlet"
      },
      {
        "id": "b",
        "text": "Azure Application Insights"
      },
      {
        "id": "c",
        "text": "Azure Custom Script Extension"
      },
      {
        "id": "d",
        "text": "a Microsoft Endpoint Manager device configuration profile"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The Azure Custom Script Extension can run an arbitrary script (e.g. one that installs and starts NGINX) on each scale set instance as part of deployment, ensuring NGINX ends up configured on every VM."
  },
  {
    "id": "az104-4-81",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure subscription that contains three virtual machines named VM1, VM2, and VM3. All the virtual machines are in an availability set named AVSet1. You need to scale up VM1 to a new virtual machine size, but the intended size is unavailable. What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "Create a proximity placement group."
      },
      {
        "id": "b",
        "text": "Deallocate VM1."
      },
      {
        "id": "c",
        "text": "Convert AvSet1 into a managed availability set."
      },
      {
        "id": "d",
        "text": "Shut down VM3 and VM3."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "When the target size isn't available on the cluster currently hosting VM1, Azure must stop and deallocate the VM first, releasing its compute allocation, before it can move VM1 onto hardware that supports the new size."
  },
  {
    "id": "az104-4-85",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure container registry named Registry1 that contains an image named image1. You receive an error message when you attempt to deploy a container instance by using image1. You need to be able to deploy a container instance by using image1. Solution: You set Admin user to Enable for Registry1. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "If the deployment failure was an authentication error pulling image1, enabling the Admin user account on Registry1 provides a valid username/password pair that Azure Container Instances can use to authenticate and pull the image, resolving the error."
  },
  {
    "id": "az104-4-100",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure subscription. You create the following Azure Resource Manager (ARM) template named Template.json. You need to deploy Template.json. Which PowerShell cmdlet should you run from Azure Cloud Shell?",
    "choices": [
      {
        "id": "a",
        "text": "New-AzSubscriptionDeployment"
      },
      {
        "id": "b",
        "text": "New-AzManagementGroupDeployment"
      },
      {
        "id": "c",
        "text": "New-AzResourceGroupDeployment"
      },
      {
        "id": "d",
        "text": "New-AzTenantDeployment"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The four PowerShell cmdlets each correspond to one of the four ARM deployment scopes - resource group, subscription, management group, and tenant. Since Template.json targets subscription scope, it must be deployed with New-AzSubscriptionDeployment rather than the resource-group-scoped New-AzResourceGroupDeployment."
  },
  {
    "id": "az104-4-101",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure subscription that contains a resource group named RG1. You plan to create a storage account named storage1. You have a Bicep file named File1. You need to modify File1 so that it can be used to automate the deployment of storage1 to RG1. Which property should you modify?",
    "choices": [
      {
        "id": "a",
        "text": "kind"
      },
      {
        "id": "b",
        "text": "scope"
      },
      {
        "id": "c",
        "text": "sku"
      },
      {
        "id": "d",
        "text": "location"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "In a Bicep file, the `scope` property (or `targetScope` at the file level) controls which resource group, subscription, or management group the deployment targets; pointing `scope` at RG1 is what directs storage1's deployment there."
  },
  {
    "id": "az104-4-106",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure subscription that contains an Azure container registry named ContReg1. You enable the Admin user for ContReg1. Which username can you use to sign in to ContReg1?",
    "choices": [
      {
        "id": "a",
        "text": "root"
      },
      {
        "id": "b",
        "text": "admin"
      },
      {
        "id": "c",
        "text": "administrator"
      },
      {
        "id": "d",
        "text": "ContReg1"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "When the Admin user is enabled on an Azure Container Registry, the registry's own name (ContReg1) is the username, paired with one of the two auto-generated admin passwords shown on the Access keys blade."
  },
  {
    "id": "az104-4-107",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure subscription. You plan to create an Azure container registry named ContReg1. You need to ensure that you can push and pull signed images for ContReg1. What should you do for ContReg1?",
    "choices": [
      {
        "id": "a",
        "text": "Enable encryption by using a customer-managed key."
      },
      {
        "id": "b",
        "text": "Create a connected registry."
      },
      {
        "id": "c",
        "text": "Add a token."
      },
      {
        "id": "d",
        "text": "Enable content trust."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Enabling content trust on an Azure Container Registry (Premium tier) turns on Docker Content Trust/Notary, letting you sign images when you push them and verify those signatures when you pull, which is what's required to push and pull signed images."
  },
  {
    "id": "az104-4-109",
    "type": "single",
    "topic": "Compute",
    "prompt": "You plan to deploy several Azure virtual machines that will run Windows Server 2022 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Custom Script Extension"
      },
      {
        "id": "b",
        "text": "Deployment Center in Azure App Service"
      },
      {
        "id": "c",
        "text": "Microsoft Entra Application Proxy"
      },
      {
        "id": "d",
        "text": "the Publish-AzVMDscConfiguration cmdlet"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The Azure Custom Script Extension can execute an installation script (e.g. apt-get install nginx) on each Windows Server 2022 instance in the scale set during deployment, ensuring NGINX is present on all of them."
  },
  {
    "id": "az104-4-111",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure subscription. You plan to deploy a container. You need to recommend which Azure services can scale the container automatically. What should you recommend?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Container Apps only"
      },
      {
        "id": "b",
        "text": "Azure Container Instances only"
      },
      {
        "id": "c",
        "text": "Azure Container Apps or Azure App Service only"
      },
      {
        "id": "d",
        "text": "Azure Container Instances or Azure App Service only"
      },
      {
        "id": "e",
        "text": "Azure Container Apps, Azure Container Instances, or Azure App Service"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Azure Container Apps and Azure App Service (running containers) both provide built-in automatic scaling based on load/metrics. Azure Container Instances is a single-container/manual-scale service with no native autoscaling, so it's excluded."
  },
  {
    "id": "az104-4-113",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure container registry named Registry1 that contains an image named image1. You receive an error message when you attempt to deploy a container instance by using image1. You need to be able to deploy a container instance by using image1. Solution: You assign the AcrPull role to ACR-Tasks-Network for Registry1. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "AcrPull grants image-pull permission to a security principal such as a user, group, service principal, or managed identity - not to an ACR Task or a network resource. Assigning AcrPull to something named 'ACR-Tasks-Network' isn't a valid fix for the identity that's actually trying to pull image1."
  },
  {
    "id": "az104-4-114",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure container registry named Registry1 that contains an image named image1. You receive an error message when you attempt to deploy a container instance by using image1. You need to be able to deploy a container instance by using image1. Solution: You select Use dedicated data endpoint for Registry1. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "'Use dedicated data endpoint' just gives the registry additional unique FQDNs for firewall-scoping purposes; enabling it doesn't grant any missing access and can even require extra firewall rules, so it doesn't fix a failed image pull by itself."
  },
  {
    "id": "az104-4-115",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure container registry named Registry1 that contains an image named image1. You receive an error message when you attempt to deploy a container instance by using image1. You need to be able to deploy a container instance by using image1. Solution: You create a private endpoint connection for Registry1. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Creating a private endpoint restricts Registry1's access to traffic from within a virtual network; without also configuring Azure Container Instances to use that VNet, this would make the registry less reachable, not fix a generic pull failure."
  },
  {
    "id": "az104-4-116",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have a Standard Azure App Service plan named Plan1. You need to ensure that Plan1 will scale automatically when the CPU usage of the web app exceeds 80 percent. What should you select for Plan1?",
    "choices": [
      {
        "id": "a",
        "text": "Automatic in the Scale out method settings"
      },
      {
        "id": "b",
        "text": "Rules Based in the Scale out method settings"
      },
      {
        "id": "c",
        "text": "Premium P1 in the Scale up (App Service plan) settings"
      },
      {
        "id": "d",
        "text": "Standard S1 in the Scale up (App Service plan) settings"
      },
      {
        "id": "e",
        "text": "Manual in the Scale out method settings"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "'Rules based' in the Scale out method settings lets you define a metric-based rule - such as scaling out when average CPU exceeds 80% - that automatically adds instances. 'Automatic' is a separate preconfigured profile, and Scale up changes the plan's pricing tier/size rather than the instance count."
  },
  {
    "id": "az104-4-118",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the resource group blade, move VM1 to another subscription. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Moving a VM to a different subscription is a billing/management-plane operation; it does not relocate the VM's compute allocation to different physical host hardware, so it doesn't address the upcoming maintenance."
  },
  {
    "id": "az104-4-119",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the VM1 Redeploy + reapply blade, you select Redeploy. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Redeploy moves the VM to a new host within the Azure infrastructure and reapplies its configuration (OS/data disks and network settings are preserved), which is the supported way to immediately get VM1 off hardware flagged for maintenance."
  },
  {
    "id": "az104-4-120",
    "type": "single",
    "topic": "Compute",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the VM1 Updates blade, select One-time update. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Updates blade manages installing OS/guest patches inside the VM; it has no effect on which physical host the VM runs on, so it doesn't move VM1 off the hardware affected by maintenance."
  },
  {
    "id": "az104-5-2",
    "type": "single",
    "topic": "Networking",
    "prompt": "Your company has three offices. The offices are located in Miami, Los Angeles, and New York. Each office contains datacenter. You have an Azure subscription that contains resources in the East US and West US Azure regions. Each region contains a virtual network. The virtual networks are peered. You need to connect the datacenters to the subscription. The solution must minimize network latency between the datacenters. What should you create?",
    "choices": [
      {
        "id": "a",
        "text": "three Azure Application Gateways and one On-premises data gateway"
      },
      {
        "id": "b",
        "text": "three virtual hubs and one virtual WAN"
      },
      {
        "id": "c",
        "text": "three virtual WANs and one virtual hub"
      },
      {
        "id": "d",
        "text": "three On-premises data gateways and one Azure Application Gateway"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure Virtual WAN with a hub deployed in each connected region (here, one hub each for the offices' nearest region plus routing to East US/West US) gives an any-to-any, Microsoft-backbone transit network between all sites, minimizing latency between the on-premises datacenters and Azure compared to point-to-point VPNs or gateways."
  },
  {
    "id": "az104-5-8",
    "type": "multi",
    "topic": "Networking",
    "prompt": "You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains four subnets named Gateway, Perimeter, NVA, and Production. The NVA subnet contains two network virtual appliances (NVAs) that will perform network traffic inspection between the Perimeter subnet and the Production subnet. You need to implement an Azure load balancer for the NVAs. The solution must meet the following requirements:; The NVAs must run in an active-active configuration that uses automatic failover.; The load balancer must load balance traffic to two services on the Production subnet. The services have different IP addresses. Which three actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "Deploy a basic load balancer"
      },
      {
        "id": "b",
        "text": "Deploy a standard load balancer"
      },
      {
        "id": "c",
        "text": "Add two load balancing rules that have HA Ports and Floating IP enabled"
      },
      {
        "id": "d",
        "text": "Add two load balancing rules that have HA Ports enabled and Floating IP disabled"
      },
      {
        "id": "e",
        "text": "Add a frontend IP configuration, a backend pool, and a health probe"
      },
      {
        "id": "f",
        "text": "Add a frontend IP configuration, two backend pools, and a health probe"
      }
    ],
    "correctChoiceIds": [
      "b",
      "c",
      "f"
    ],
    "explanation": "A Standard Load Balancer is required for HA Ports rules, which forward all ports/protocols and, combined with Floating IP (Direct Server Return), let the two NVAs run active-active with automatic failover; because the two production services listen on different IP addresses, the load balancer needs a separate backend pool for each service behind one frontend IP and health probe."
  },
  {
    "id": "az104-5-9",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have an Azure subscription named Subscription1 that contains two Azure virtual networks named VNet1 and VNet2. VNet1 contains a VPN gateway namedVPNGW1 that uses static routing. There is a site-to-site VPN connection between your on-premises network and VNet1. On a computer named Client1 that runs Windows 10, you configure a point-to-site VPN connection to VNet1. You configure virtual network peering between VNet1 and VNet2. You verify that you can connect to VNet2 from the on-premises network. Client1 is unable to connect to VNet2. You need to ensure that you can connect Client1 to VNet2. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Download and re-install the VPN client configuration package on Client1."
      },
      {
        "id": "b",
        "text": "Select Allow gateway transit on VNet1."
      },
      {
        "id": "c",
        "text": "Select Allow gateway transit on VNet2."
      },
      {
        "id": "d",
        "text": "Enable BGP on VPNGW1"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Peering VNet1 to VNet2 changes the routes advertised by VPNGW1, but an already-provisioned point-to-site client on Client1 won't automatically pick up the new address space; re-downloading and installing the VPN client configuration package (which includes the updated routes) is required for Client1 to reach VNet2."
  },
  {
    "id": "az104-5-14",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have an Azure web app named webapp1. You have a virtual network named VNET1 and an Azure virtual machine named VM1 that hosts a MySQL database. VM1 connects to VNET1. You need to ensure that webapp1 can access the data hosted on VM1. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Deploy an internal load balancer"
      },
      {
        "id": "b",
        "text": "Peer VNET1 to another virtual network"
      },
      {
        "id": "c",
        "text": "Connect webapp1 to VNET1"
      },
      {
        "id": "d",
        "text": "Deploy an Azure Application Gateway"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Regional VNet Integration connects webapp1 directly into VNET1, giving the web app outbound network access to resources inside that VNet - including the MySQL server hosted on VM1 - without requiring a public endpoint on VM1."
  },
  {
    "id": "az104-5-16",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Floating IP (direct server return) to Disabled"
      },
      {
        "id": "b",
        "text": "Session persistence to None"
      },
      {
        "id": "c",
        "text": "Floating IP (direct server return) to Enabled"
      },
      {
        "id": "d",
        "text": "Session persistence to Client IP"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Setting session persistence (source IP affinity) to Client IP makes the load balancer route all requests from the same client IP address to the same backend VM for the duration of the session, so each visitor keeps hitting the same web server."
  },
  {
    "id": "az104-5-17",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the following resources:; A virtual network that has a subnet named Subnet1; Two network security groups (NSGs) named NSG-VM1 and NSG-Subnet1; A virtual machine named VM1 that has the required Windows Server configurations to allow Remote Desktop connectionsNSG-Subnet1 has the default inbound security rules only. NSG-VM1 has the default inbound security rules and the following custom inbound security rule:; Priority: 100; Source: Any; Source port range: *; Destination: *; Destination port range: 3389; Protocol: UDP; Action: AllowVM1 has a public IP address and is connected to Subnet1. NSG-VM1 is associated to the network interface of VM1. NSG-Subnet1 is associated to Subnet1. You need to be able to establish Remote Desktop connections from the internet to VM1. Solution: You add an inbound security rule to NSG-Subnet1 that allows connections from the Any source to the *destination for port range 3389 and uses the TCP protocol. You remove NSG-VM1 from the network interface of VM1. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "With NSG-VM1 removed from VM1's network interface, only NSG-Subnet1 filters traffic to VM1; adding an inbound rule there that allows TCP port 3389 from any source lets Remote Desktop connections reach VM1 from the internet."
  },
  {
    "id": "az104-5-18",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the following resources:; A virtual network that has a subnet named Subnet1; Two network security groups (NSGs) named NSG-VM1 and NSG-Subnet1; A virtual machine named VM1 that has the required Windows Server configurations to allow Remote Desktop connectionsNSG-Subnet1 has the default inbound security rules only. NSG-VM1 has the default inbound security rules and the following custom inbound security rule:; Priority: 100; Source: Any; Source port range: *; Destination: *; Destination port range: 3389Protocol: UDP -; Action: AllowVM1 has a public IP address and is connected to Subnet1. NSG-VM1 is associated to the network interface of VM1. NSG-Subnet1 is associated to Subnet1. You need to be able to establish Remote Desktop connections from the internet to VM1. Solution: You add an inbound security rule to NSG-Subnet1 that allows connections from the internet source to the VirtualNetwork destination for port range 3389 and uses the UDP protocol. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Remote Desktop uses TCP, not UDP - a rule that allows UDP port 3389 doesn't help TCP-based RDP traffic. NSG-VM1's existing UDP-only allow rule is also left untouched, so RDP still can't get through."
  },
  {
    "id": "az104-5-19",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains the following resources:; A virtual network that has a subnet named Subnet1; Two network security groups (NSGs) named NSG-VM1 and NSG-Subnet1; A virtual machine named VM1 that has the required Windows Server configurations to allow Remote Desktop connectionsNSG-Subnet1 has the default inbound security rules only. NSG-VM1 has the default inbound security rules and the following custom inbound security rule:; Priority: 100; Source: Any; Source port range: *; Destination: *; Destination port range: 3389; Protocol: UDP; Action: AllowVM1 has a public IP address and is connected to Subnet1. NSG-VM1 is associated to the network interface of VM1. NSG-Subnet1 is associated to Subnet1. You need to be able to establish Remote Desktop connections from the internet to VM1. Solution: You add an inbound security rule to NSG-Subnet1 and NSG-VM1 that allows connections from the internet source to the VirtualNetwork destination for port range 3389 and uses the TCP protocol. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Adding a higher-priority rule that allows TCP port 3389 from Internet to both NSG-Subnet1 and NSG-VM1 overrides the existing UDP-only rule on NSG-VM1 (which never matched TCP anyway) and opens the correct protocol/port at both layers, so RDP from the internet succeeds."
  },
  {
    "id": "az104-5-23",
    "type": "single",
    "topic": "Networking",
    "prompt": "Your company has an Azure subscription named Subscription1. The company also has two on-premises servers named Server1 and Server2 that run Windows Server 2016. Server1 is configured as a DNS server that has a primary DNS zone named adatum.com. Adatum.com contains 1,000 DNS records. You manage Server1 and Subscription1 from Server2. Server2 has the following tools installed:; The DNS Manager console; Azure PowerShell; Azure CLI 2.0. You need to move the adatum.com zone to an Azure DNS zone in Subscription1. The solution must minimize administrative effort. What should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Azure CLI"
      },
      {
        "id": "b",
        "text": "Azure PowerShell"
      },
      {
        "id": "c",
        "text": "the Azure portal"
      },
      {
        "id": "d",
        "text": "the DNS Manager console"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The Azure CLI's `az network dns zone import` command can import an entire BIND-style zone file exported from the on-premises DNS server in a single operation, which is far less effort than manually recreating 1,000 records through the portal or one-by-one with PowerShell cmdlets."
  },
  {
    "id": "az104-5-24",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have a public load balancer that balances ports 80 and 443 across three virtual machines named VM1, VM2, and VM3. You need to direct all the Remote Desktop Protocol (RDP) connections to VM3 only. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "an inbound NAT rule"
      },
      {
        "id": "b",
        "text": "a new public load balancer for VM3"
      },
      {
        "id": "c",
        "text": "a frontend IP configuration"
      },
      {
        "id": "d",
        "text": "a load balancing rule"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "An inbound NAT rule maps a specific frontend port directly to VM3's backend port for RDP, bypassing the load-balancing rule's round-robin distribution so RDP traffic goes only to VM3 while the existing port 80/443 load-balancing rules keep serving all three VMs."
  },
  {
    "id": "az104-5-29",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have two subscriptions named Subscription1 and Subscription2. Each subscription is associated to a different Azure AD tenant. Subscription1 contains a virtual network named VNet1. VNet1 contains an Azure virtual machine named VM1 and has an IP address space of 10.0.0.0/16. Subscription2 contains a virtual network named VNet2. VNet2 contains an Azure virtual machine named VM2 and has an IP address space of 10.10.0.0/24. You need to connect VNet1 to VNet2. What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "Move VM1 to Subscription2."
      },
      {
        "id": "b",
        "text": "Move VNet1 to Subscription2."
      },
      {
        "id": "c",
        "text": "Modify the IP address space of VNet2."
      },
      {
        "id": "d",
        "text": "Provision virtual network gateways."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "VNet1 and VNet2 sit in different subscriptions under different Azure AD tenants, so a straightforward VNet-to-VNet connection is built with VPN gateways rather than native peering; provisioning a virtual network gateway in each VNet is the necessary first step before you can create the connection between them."
  },
  {
    "id": "az104-5-33",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate. From Azure, you download and install the VPN client configuration package on a computer named Computer2. You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2. Solution: You modify the Azure Active Directory (Azure AD) authentication policies. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "This point-to-site connection authenticates with a certificate, not Azure AD credentials, so modifying Azure AD authentication policies has no effect. Computer2 needs the correct client certificate installed, which this solution doesn't provide."
  },
  {
    "id": "az104-5-34",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate. From Azure, you download and install the VPN client configuration package on a computer named Computer2. You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2. Solution: You join Computer2 to Azure Active Directory (Azure AD). Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Joining Computer2 to Azure AD doesn't install the client certificate that the certificate-based point-to-site VPN requires; without that certificate, Computer2 still can't authenticate to VNet1."
  },
  {
    "id": "az104-5-35",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups. Another administrator plans to create several network security groups (NSGs) in the subscription. You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks. Solution: You create a resource lock, and then you assign the lock to the subscription. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "A resource lock only prevents deletion or modification of the resource it's applied to (or its children); it cannot inject a new inbound rule into NSGs that don't exist yet. Only an Azure Policy with a deployIfNotExists/modify effect can automatically add a rule to newly created NSGs."
  },
  {
    "id": "az104-5-39",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have the Azure virtual network named VNet1 that contains a subnet named Subnet1. Subnet1 contains three Azure virtual machines. Each virtual machine has a public IP address. The virtual machines host several applications that are accessible over port 443 to users on the Internet. Your on-premises network has a site-to-site VPN connection to VNet1. You discover that the virtual machines can be accessed by using the Remote Desktop Protocol (RDP) from the Internet and from the on-premises network. You need to prevent RDP access to the virtual machines from the Internet, unless the RDP connection is established from the on-premises network. The solution must ensure that all the applications can still be accessed by the Internet users. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Modify the address space of the local network gateway"
      },
      {
        "id": "b",
        "text": "Create a deny rule in a network security group (NSG) that is linked to Subnet1"
      },
      {
        "id": "c",
        "text": "Remove the public IP addresses from the virtual machines"
      },
      {
        "id": "d",
        "text": "Modify the address space of Subnet1"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "An NSG rule on Subnet1 that denies inbound RDP (port 3389) from the Internet - while still allowing it from the on-premises address range that arrives via the site-to-site VPN - blocks unwanted RDP from the internet without touching the separate rules that keep port 443 open to internet users."
  },
  {
    "id": "az104-5-41",
    "type": "multi",
    "topic": "Networking",
    "prompt": "You have an Azure subscription named Subscription1 that contains an Azure virtual network named VNet1. VNet1 connects to your on-premises network by using Azure ExpressRoute. You plan to prepare the environment for automatic failover in case of ExpressRoute failure. You need to connect VNet1 to the on-premises network by using a site-to-site VPN. The solution must minimize cost. Which three actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "Create a connection"
      },
      {
        "id": "b",
        "text": "Create a local site VPN gateway"
      },
      {
        "id": "c",
        "text": "Create a VPN gateway that uses the VpnGw1 SKU"
      },
      {
        "id": "d",
        "text": "Create a gateway subnet"
      },
      {
        "id": "e",
        "text": "Create a VPN gateway that uses the Basic SKU"
      }
    ],
    "correctChoiceIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "For ExpressRoute/VPN coexistence the VPN gateway must be at least the VpnGw1 SKU (Basic SKU isn't supported alongside ExpressRoute), and since VNet1 already has a gateway subnet from the ExpressRoute deployment, the only remaining steps are to create the VPN gateway itself, a local network gateway representing the on-premises side, and the connection joining them."
  },
  {
    "id": "az104-5-53",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate. From Azure, you download and install the VPN client configuration package on a computer named Computer2. You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2. Solution: You export the client certificate from Computer1 and install the certificate on Computer2. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "For a certificate-based point-to-site VPN, each connecting computer needs a valid client certificate (with its private key) issued from the trusted root. Exporting the working certificate from Computer1 and importing it into Computer2's certificate store lets Computer2 authenticate successfully."
  },
  {
    "id": "az104-5-55",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups. Another administrator plans to create several network security groups (NSGs) in the subscription. You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks. Solution: From the Resource providers blade, you unregister the Microsoft.ClassicNetwork provider. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Unregistering the Microsoft.ClassicNetwork resource provider disables APIs tied to classic (non-Resource Manager) networking resources; it has no bearing on getting a security rule automatically added to newly created NSGs. Only an Azure Policy (deployIfNotExists) assignment can do that."
  },
  {
    "id": "az104-5-57",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure LoadBalancer. The effective network security configurations for VM2 are shown in the following exhibit. You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443. Solution: You create an inbound security rule that denies all traffic from the 131.107.100.50 source and has a cost of 64999. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Creating a rule that denies traffic from 131.107.100.50 is the opposite of what's needed - the goal is to allow that source, not block it further - and NSG rules are ordered by 'priority', not a property called 'cost', so this solution neither uses a real setting nor restores the connection."
  },
  {
    "id": "az104-5-58",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure LoadBalancer. The effective network security configurations for VM2 are shown in the following exhibit. You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443. Solution: You delete the BlockAllOther443 inbound security rule. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Deleting the 'BlockAllOther443' rule only removes that specific rule; it doesn't guarantee the traffic from 131.107.100.50 is allowed if a different, higher-priority rule (or the NSG's implicit default deny) is still evaluated first and blocking it."
  },
  {
    "id": "az104-5-59",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure LoadBalancer. The effective network security configurations for VM2 are shown in the following exhibit. You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443. Solution: You modify the priority of the Allow_131.107.100.50 inbound security rule. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Simply changing the priority value of the Allow_131.107.100.50 rule doesn't help unless it's actually moved to a lower number (higher precedence) than whichever rule is currently denying that traffic; without confirming it now wins over the blocking rule, connectivity is still not restored."
  },
  {
    "id": "az104-5-60",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups. Another administrator plans to create several network security groups (NSGs) in the subscription. You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks. Solution: You assign a built-in policy definition to the subscription. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "There is no built-in Azure Policy definition that automatically injects a custom NSG rule blocking a specific TCP port into every newly created NSG; assigning a generic built-in policy doesn't meet this specific requirement, which needs a custom deployIfNotExists policy."
  },
  {
    "id": "az104-5-61",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have an Azure subscription. You plan to deploy an Azure Kubernetes Service (AKS) cluster to support an app named App1. On-premises clients connect to App1 by using the IP address of the pod. For the AKS cluster, you need to choose a network type that will support App1. What should you choose?",
    "choices": [
      {
        "id": "a",
        "text": "kubenet"
      },
      {
        "id": "b",
        "text": "Azure Container Networking Interface (CNI)"
      },
      {
        "id": "c",
        "text": "Hybrid Connection endpoints"
      },
      {
        "id": "d",
        "text": "Azure Private Link"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure CNI assigns each pod a routable IP address directly from the VNet's address space, so on-premises clients connected to that VNet can reach pods by IP. Kubenet instead NATs pod traffic behind the node's IP, so pod IPs aren't individually reachable from outside the cluster."
  },
  {
    "id": "az104-5-63",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups. Another administrator plans to create several network security groups (NSGs) in the subscription. You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks. Solution: You configure a custom policy definition, and then you assign the policy to the subscription. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "A custom Azure Policy definition with a deployIfNotExists (or append) effect, assigned at the subscription, can automatically add the required rule to every NSG as it's created - unlike a resource lock or unregistering a provider, this is exactly what Azure Policy remediation is designed to do."
  },
  {
    "id": "az104-5-64",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have two Azure virtual networks named VNet1 and VNet2. VNet1 contains an Azure virtual machine named VM1. VNet2 contains an Azure virtual machine named VM2. VM1 hosts a frontend application that connects to VM2 to retrieve data. Users report that the frontend application is slower than usual. You need to view the average round-trip time (RTT) of the packets from VM1 to VM2. Which Azure Network Watcher feature should you use?",
    "choices": [
      {
        "id": "a",
        "text": "IP flow verify"
      },
      {
        "id": "b",
        "text": "Connection troubleshoot"
      },
      {
        "id": "c",
        "text": "Connection monitor"
      },
      {
        "id": "d",
        "text": "NSG flow logs"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Network Watcher's Connection Monitor runs continuous connectivity tests between two endpoints and reports metrics such as average round-trip time, packet loss, and per-hop latency, which is exactly what's needed to measure RTT between VM1 and VM2."
  },
  {
    "id": "az104-5-67",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have an Azure subscription that contains two virtual machines as shown in the following table. You perform a reverse DNS lookup for 10.0.0.4 from VM2. Which FQDN will be returned?",
    "choices": [
      {
        "id": "a",
        "text": "vm1.core.windows.net"
      },
      {
        "id": "b",
        "text": "vm1.azure.com"
      },
      {
        "id": "c",
        "text": "vm1.westeurope.cloudapp.azure.com"
      },
      {
        "id": "d",
        "text": "vm1.internal.cloudapp.net"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Azure provides internal DNS resolution for VMs in the same VNet using the pattern <vmname>.internal.cloudapp.net; a reverse lookup on VM1's private IP address (10.0.0.4) from another VM in the same VNet resolves to that internal FQDN."
  },
  {
    "id": "az104-5-68",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure LoadBalancer. The effective network security configurations for VM2 are shown in the following exhibit. You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443. Solution: You create an inbound security rule that allows any traffic from the AzureLoadBalancer source and has a cost of 150. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Allowing traffic tagged AzureLoadBalancer only permits the load balancer's own health-probe and relay traffic - it does not open access for the actual client at 131.107.100.50, so this rule doesn't restore that client's connection, and 'cost' again isn't a real NSG rule property."
  },
  {
    "id": "az104-5-69",
    "type": "multi",
    "topic": "Networking",
    "prompt": "You have an Azure subscription that contains a policy-based virtual network gateway named GW1 and a virtual network named VNet1. You need to ensure that you can configure a point-to-site connection from an on-premises computer to VNet1. Which two actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "Add a service endpoint to VNet1"
      },
      {
        "id": "b",
        "text": "Reset GW1"
      },
      {
        "id": "c",
        "text": "Create a route-based virtual network gateway"
      },
      {
        "id": "d",
        "text": "Add a connection to GW1"
      },
      {
        "id": "e",
        "text": "Delete GW1"
      },
      {
        "id": "f",
        "text": "Add a public IP address space to VNet1"
      }
    ],
    "correctChoiceIds": [
      "c",
      "e"
    ],
    "explanation": "Point-to-site VPN requires a route-based VPN gateway; a policy-based gateway like GW1 doesn't support P2S connections. Since the gateway SKU/type can't be changed in place, GW1 must be deleted and replaced with a new route-based gateway."
  },
  {
    "id": "az104-5-73",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You manage a virtual network named VNet1 that is hosted in the West US Azure region. VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server. You need to inspect all the network traffic from VM1 to VM2 for a period of three hours. Solution: From Azure Network Watcher, you create a packet capture. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Network Watcher's packet capture feature can capture live network traffic on a VM for a specified duration and filter, which lets you inspect all packets sent between VM1 and VM2 over the required window."
  },
  {
    "id": "az104-5-74",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You manage a virtual network named VNet1 that is hosted in the West US Azure region. VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server. You need to inspect all the network traffic from VM1 to VM2 for a period of three hours. Solution: From Azure Network Watcher, you create a connection monitor. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Connection monitor performs periodic synthetic connectivity and latency checks between endpoints; it reports reachability and latency statistics, not the actual packet-level contents of traffic between VM1 and VM2, so it doesn't let you inspect the traffic itself."
  },
  {
    "id": "az104-5-75",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You manage a virtual network named VNet1 that is hosted in the West US Azure region. VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server. You need to inspect all the network traffic from VM1 to VM2 for a period of three hours. Solution: From Performance Monitor, you create a Data Collector Set (DCS). Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "A Windows Performance Monitor Data Collector Set gathers local performance counters, event trace data, and configuration data from the machine it runs on; it has no ability to capture network traffic passing between two separate VMs."
  },
  {
    "id": "az104-5-77",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You manage a virtual network named VNet1 that is hosted in the West US Azure region. VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server. You need to inspect all the network traffic from VM1 to VM2 for a period of three hours. Solution: From Azure Monitor, you create a metric on Network In and Network Out. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Network In/Network Out metrics only report aggregate byte counts transferred over time; they give no visibility into the actual packets or their contents, so they don't satisfy a requirement to inspect the traffic between VM1 and VM2."
  },
  {
    "id": "az104-5-78",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure LoadBalancer. The effective network security configurations for VM2 are shown in the following exhibit. You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443. Solution: You create an inbound security rule that denies all traffic from the 131.107.100.50 source and has a priority of 64999. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Denying traffic from 131.107.100.50 is the opposite of what's needed to restore that client's connectivity, and placing it at priority 64999 doesn't help if a rule with a lower (higher-precedence) priority number is already blocking or failing to allow that traffic."
  },
  {
    "id": "az104-5-84",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate. From Azure, you download and install the VPN client configuration package on a computer named Computer2. You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2. Solution: On Computer2, you set the Startup type for the IPSec Policy Agent service to Automatic. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Windows IPsec Policy Agent service isn't what a certificate-based Azure point-to-site VPN client depends on; changing its startup type has no effect. The actual missing piece is installing the correct client certificate on Computer2."
  },
  {
    "id": "az104-5-85",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Session persistence to Client IP and protocol"
      },
      {
        "id": "b",
        "text": "Protocol to UDP"
      },
      {
        "id": "c",
        "text": "Session persistence to None"
      },
      {
        "id": "d",
        "text": "Floating IP (direct server return) to Enabled"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Setting session persistence to 'Client IP and protocol' (source IP affinity) makes the Azure Load Balancer route all requests from the same client IP/protocol pair to the same backend VM, ensuring each visitor is consistently serviced by the same web server."
  },
  {
    "id": "az104-5-87",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure subscription. You are deploying an Azure Kubernetes Service (AKS) cluster that will contain multiple pods. The pods will use kubenet networking. You need to restrict network traffic between the pods. What should you configure on the AKS cluster?",
    "choices": [
      {
        "id": "a",
        "text": "the Azure network policy"
      },
      {
        "id": "b",
        "text": "the Calico network policy"
      },
      {
        "id": "c",
        "text": "pod security policies"
      },
      {
        "id": "d",
        "text": "an application security group"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Kubernetes NetworkPolicy enforcement in AKS needs a network policy engine. The Azure network policy plugin only works with Azure CNI networking, so a cluster using kubenet must use the Calico network policy engine to restrict pod-to-pod traffic."
  },
  {
    "id": "az104-5-89",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Floating IP (direct server return) to Enabled"
      },
      {
        "id": "b",
        "text": "Floating IP (direct server return) to Disabled"
      },
      {
        "id": "c",
        "text": "a health probe"
      },
      {
        "id": "d",
        "text": "Session persistence to Client IP and Protocol"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Setting Session persistence to Client IP and Protocol enables source-IP affinity, so repeat requests from the same client are always routed to the same backend VM instead of being distributed round-robin."
  },
  {
    "id": "az104-5-91",
    "type": "multi",
    "topic": "Networking",
    "prompt": "You have an Azure subscription that contains two virtual machines named VM1 and VM2. You create an Azure load balancer. You plan to create a load balancing rule that will load balance HTTPS traffic between VM1 and VM2. Which two additional load balancer resources should you create before you can create the load balancing rule? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "a frontend IP address"
      },
      {
        "id": "b",
        "text": "an inbound NAT rule"
      },
      {
        "id": "c",
        "text": "a virtual network"
      },
      {
        "id": "d",
        "text": "a backend pool"
      },
      {
        "id": "e",
        "text": "a health probe"
      }
    ],
    "correctChoiceIds": [
      "d",
      "e"
    ],
    "explanation": "A load balancing rule requires a backend pool containing the VMs to receive traffic and a health probe to determine which pool members are healthy; the frontend IP is typically already defined when the load balancer itself is created."
  },
  {
    "id": "az104-5-92",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have an on-premises network that contains a database server named dbserver1. You have an Azure subscription. You plan to deploy three Azure virtual machines. Each virtual machine will be deployed to a separate availability zone. You need to configure an Azure VPN gateway for a site-to-site VPN. The solution must ensure that the virtual machines can connect to dbserver1. Which type of public IP address SKU and assignment should you use for the gateway?",
    "choices": [
      {
        "id": "a",
        "text": "a basic SKU and a static IP address assignment"
      },
      {
        "id": "b",
        "text": "a standard SKU and a static IP address assignment"
      },
      {
        "id": "c",
        "text": "a basic SKU and a dynamic IP address assignment"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "A zone-redundant VPN gateway requires a Standard SKU public IP address with a static assignment; Basic SKU public IPs do not support availability zones and cannot be used with a zone-redundant gateway configuration."
  },
  {
    "id": "az104-5-95",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have an on-premises datacenter and an Azure subscription. You plan to connect the datacenter to Azure by using ExpressRoute. You need to deploy an ExpressRoute gateway. The solution must meet the following requirements:\n- Support up to 10 Gbps of traffic.\n- Support availability zones.\n- Support FastPath.\n- Minimize costs.\nWhich SKU should you deploy?",
    "choices": [
      {
        "id": "a",
        "text": "ERGw1AZ"
      },
      {
        "id": "b",
        "text": "ERGw2AZ"
      },
      {
        "id": "c",
        "text": "ErGw3"
      },
      {
        "id": "d",
        "text": "ErGw3AZ"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Only the zone-redundant (AZ) ExpressRoute gateway SKUs support availability zones, and among those, only ErGw3AZ scales to 10 Gbps with FastPath support, making it the only SKU that satisfies all four requirements."
  },
  {
    "id": "az104-5-98",
    "type": "single",
    "topic": "Networking",
    "prompt": "Your on-premises network contains an SMB share named Share1. You have an Azure subscription that contains the following resources:\n- A web app named webapp1\n- A virtual network named VNET1\nYou need to ensure that webapp1 can connect to Share1. What should you deploy?",
    "choices": [
      {
        "id": "a",
        "text": "an Azure Application Gateway"
      },
      {
        "id": "b",
        "text": "an Azure Active Directory (Azure AD) Application Proxy"
      },
      {
        "id": "c",
        "text": "an Azure Virtual Network Gateway"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "To reach an on-premises SMB share, webapp1 needs a routed, private path back to the on-premises network. Integrating webapp1 with VNET1 and deploying a VPN Virtual Network Gateway on VNET1 gives it a site-to-site tunnel to reach Share1."
  },
  {
    "id": "az104-5-100",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription that contains a storage account named storage1. You need to allow access to storage1 from selected networks and your home office. The solution must minimize administrative effort. What should you do first for storage1?",
    "choices": [
      {
        "id": "a",
        "text": "Add a private endpoint."
      },
      {
        "id": "b",
        "text": "Modify the Public network access settings."
      },
      {
        "id": "c",
        "text": "Select Internet routing."
      },
      {
        "id": "d",
        "text": "Modify the Access Control (IAM) settings."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Before you can add firewall rules for selected networks and specific IP ranges (such as your home office), you must first change Public network access from all networks to Selected networks, which is done under the storage account's networking settings."
  },
  {
    "id": "az104-5-101",
    "type": "single",
    "topic": "Networking",
    "prompt": "You plan to deploy route-based Site-to-Site VPN connections between several on-premises locations and an Azure virtual network. Which tunneling protocol should you use?",
    "choices": [
      {
        "id": "a",
        "text": "IKEv1"
      },
      {
        "id": "b",
        "text": "PPTP"
      },
      {
        "id": "c",
        "text": "IKEv2"
      },
      {
        "id": "d",
        "text": "L2TP"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Azure route-based Site-to-Site VPN gateways use IKEv2/IPsec. PPTP and L2TP are point-to-site protocols, and IKEv1 support is limited to certain policy-based or legacy configurations, not the standard route-based S2S deployment."
  },
  {
    "id": "az104-5-103",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Protocol to UDP"
      },
      {
        "id": "b",
        "text": "Session persistence to None"
      },
      {
        "id": "c",
        "text": "Floating IP (direct server return) to Disabled"
      },
      {
        "id": "d",
        "text": "Session persistence to Client IP"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Configuring Session persistence to Client IP creates source-IP affinity so the load balancer keeps sending a given client's requests to the same backend VM rather than distributing them across all five servers."
  },
  {
    "id": "az104-5-105",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Floating IP (direct server return) to Disabled"
      },
      {
        "id": "b",
        "text": "Session persistence to Client IP"
      },
      {
        "id": "c",
        "text": "Protocol to UDP"
      },
      {
        "id": "d",
        "text": "Idle Time-out (minutes) to 20"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Session persistence to Client IP pins a given client to a single backend VM based on source IP, ensuring consistent servicing across repeated requests."
  },
  {
    "id": "az104-5-106",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have an Azure subscription that contains 20 virtual machines, a network security group (NSG) named NSG1, and two virtual networks named VNET1 and VNET2 that are peered. You plan to deploy an Azure Bastion Basic SKU host named Bastion1 to VNET1. You need to configure NSG1 to allow inbound access to the virtual machines via Bastion1. Which port should you configure for the inbound security rule?",
    "choices": [
      {
        "id": "a",
        "text": "22"
      },
      {
        "id": "b",
        "text": "443"
      },
      {
        "id": "c",
        "text": "389"
      },
      {
        "id": "d",
        "text": "8080"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure Bastion terminates the user's browser-based RDP/SSH session over HTTPS, so the NSG protecting the AzureBastionSubnet must allow inbound TCP 443 from the Internet (or GatewayManager) for Bastion1 to establish sessions that are then relayed to the target VMs."
  },
  {
    "id": "az104-5-108",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Session persistence to None"
      },
      {
        "id": "b",
        "text": "a health probe"
      },
      {
        "id": "c",
        "text": "Session persistence to Client IP"
      },
      {
        "id": "d",
        "text": "Idle Time-out (minutes) to 20"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Session persistence to Client IP is the setting that keeps a visitor pinned to the same backend web server for subsequent requests."
  },
  {
    "id": "az104-5-110",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an on-premises network. You have an Azure subscription that contains three virtual networks named VNET1, VNET2, and VNET3. The virtual networks are peered and connected to the on-premises network. The subscription contains the virtual machines shown in the following table. You need to monitor connectivity between the virtual machines and the on-premises network by using Connection Monitor. What is the minimum number of connection monitors you should deploy?",
    "choices": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "3"
      },
      {
        "id": "d",
        "text": "4"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Network Watcher, which powers Connection Monitor, is a regional service, so a separate Connection Monitor resource is needed for each Azure region containing source VMs even though a single monitor can track multiple test groups and endpoints."
  },
  {
    "id": "az104-5-112",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription that contains a storage account. The account stores website data. You need to ensure that inbound user traffic uses the Microsoft point-of-presence (POP) closest to the user's location. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "private endpoints"
      },
      {
        "id": "b",
        "text": "Azure Firewall rules"
      },
      {
        "id": "c",
        "text": "Routing preference"
      },
      {
        "id": "d",
        "text": "load balancing"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The storage account's Routing preference setting lets you choose Microsoft network routing, which sends client traffic onto Microsoft's global backbone at the POP nearest the user, instead of the default Internet routing based on the ISP path."
  },
  {
    "id": "az104-5-113",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have two Azure virtual machines named VM1 and VM2 that run Windows Server. The virtual machines are in a subnet named Subnet1. Subnet1 is in a virtual network named VNet1. You need to prevent VM1 from accessing VM2 on port 3389. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Create a network security group (NSG) that has an outbound security rule to deny destination port 3389 and apply the NSG to the network interface of VM1."
      },
      {
        "id": "b",
        "text": "Configure Azure Bastion in VNet1."
      },
      {
        "id": "c",
        "text": "Create a network security group (NSG) that has an outbound security rule to deny source port 3389 and apply the NSG to Subnet1."
      },
      {
        "id": "d",
        "text": "Create a network security group (NSG) that has an inbound security rule to deny source port 3389 and apply the NSG to Subnet1."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Blocking VM1's outbound traffic to destination port 3389 on VM1's own NIC prevents only VM1 from initiating RDP connections to VM2, without affecting other traffic on the shared subnet."
  },
  {
    "id": "az104-5-116",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Session persistence to None"
      },
      {
        "id": "b",
        "text": "a health probe"
      },
      {
        "id": "c",
        "text": "Session persistence to Client IP and protocol"
      },
      {
        "id": "d",
        "text": "Idle Time-out (minutes) to 20"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Session persistence to Client IP and protocol pins each visitor's requests to the same backend server based on source IP and protocol, meeting the requirement."
  },
  {
    "id": "az104-5-117",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "a health probe"
      },
      {
        "id": "b",
        "text": "Floating IP (direct server return) to Enabled"
      },
      {
        "id": "c",
        "text": "Session persistence to Client IP and protocol"
      },
      {
        "id": "d",
        "text": "Protocol to UDP"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "A health probe only determines backend availability and Floating IP changes the return path, neither affects client stickiness; Session persistence to Client IP and protocol is what routes a client's repeat requests to the same server."
  },
  {
    "id": "az104-5-119",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Session persistence to Client IP and protocol"
      },
      {
        "id": "b",
        "text": "Protocol to UDP"
      },
      {
        "id": "c",
        "text": "Session persistence to None"
      },
      {
        "id": "d",
        "text": "Floating IP (direct server return) to Disabled"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Session persistence to Client IP and protocol enables source-IP affinity so each visitor consistently reaches the same backend web server."
  },
  {
    "id": "az104-5-121",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Floating IP (direct server return) to Enabled"
      },
      {
        "id": "b",
        "text": "Session persistence to Client IP"
      },
      {
        "id": "c",
        "text": "Protocol to UDP"
      },
      {
        "id": "d",
        "text": "Idle Time-out (minutes) to 20"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Session persistence to Client IP is the load balancer setting that provides client stickiness so the same visitor always lands on the same backend server."
  },
  {
    "id": "az104-5-123",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Floating IP (direct server return) to Disabled"
      },
      {
        "id": "b",
        "text": "Floating IP (direct server return) to Enabled"
      },
      {
        "id": "c",
        "text": "a health probe"
      },
      {
        "id": "d",
        "text": "Session persistence to Client IP"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Session persistence to Client IP is what achieves client stickiness for the web servers behind LB1."
  },
  {
    "id": "az104-5-124",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Floating IP (direct server return) to Enabled"
      },
      {
        "id": "b",
        "text": "Idle Time-out (minutes) to 20"
      },
      {
        "id": "c",
        "text": "a health probe"
      },
      {
        "id": "d",
        "text": "Session persistence to Client IP"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Session persistence to Client IP keeps each visitor pinned to the same backend server, meeting the sticky-session requirement."
  },
  {
    "id": "az104-5-126",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Session persistence to Client IP and protocol"
      },
      {
        "id": "b",
        "text": "Idle Time-out (minutes) to 20"
      },
      {
        "id": "c",
        "text": "Session persistence to None"
      },
      {
        "id": "d",
        "text": "Floating IP (direct server return) to Enabled"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Session persistence to Client IP and protocol provides the source-IP affinity needed for visitors to always reach the same backend web server."
  },
  {
    "id": "az104-5-127",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Floating IP (direct server return) to Disabled"
      },
      {
        "id": "b",
        "text": "Idle Time-out (minutes) to 20"
      },
      {
        "id": "c",
        "text": "a health probe"
      },
      {
        "id": "d",
        "text": "Session persistence to Client IP"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Session persistence to Client IP is the setting that keeps each visitor serviced by the same backend web server."
  },
  {
    "id": "az104-5-128",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Session persistence to Client IP"
      },
      {
        "id": "b",
        "text": "Idle Time-out (minutes) to 20"
      },
      {
        "id": "c",
        "text": "Session persistence to None"
      },
      {
        "id": "d",
        "text": "Protocol to UDP"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Session persistence to Client IP creates the sticky-session behavior needed so each visitor keeps hitting the same backend server."
  },
  {
    "id": "az104-5-129",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have an Azure subscription. You create a routing table named RT1. You need to add a route to RT1 that specifies the next hop IP address. Which next hop type should you select?",
    "choices": [
      {
        "id": "a",
        "text": "Internet"
      },
      {
        "id": "b",
        "text": "Virtual network gateway"
      },
      {
        "id": "c",
        "text": "Virtual network"
      },
      {
        "id": "d",
        "text": "Virtual appliance"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Only the Virtual appliance next hop type in a user-defined route lets you enter a specific next hop IP address (typically the private IP of an NVA); the other next hop types route to fixed, platform-defined destinations."
  },
  {
    "id": "az104-5-131",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription that contains a Recovery Services vault named Vault1. You need to enable multi-user authorization (MAU) for Vault1. Which resource should you create first?",
    "choices": [
      {
        "id": "a",
        "text": "an administrative unit"
      },
      {
        "id": "b",
        "text": "a managed identity"
      },
      {
        "id": "c",
        "text": "a resource guard"
      },
      {
        "id": "d",
        "text": "a custom Azure role"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Multi-user authorization for Azure Backup is implemented by protecting critical operations with a Resource Guard, typically deployed in a separate subscription or tenant; the resource guard must exist before it can be associated with Vault1 to enforce MUA."
  },
  {
    "id": "az104-5-132",
    "type": "single",
    "topic": "Networking",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer. The effective network security configurations for VM2 are shown in the following exhibit. You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.\nSolution: You create an inbound security rule that allows any traffic from the AzureLoadBalancer source and has a priority of 150. Does this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "If the NSG on VM2 is missing an allow rule for the AzureLoadBalancer tag, the load balancer's health probes fail, VM2 is marked unhealthy, and it is pulled out of rotation entirely, causing all client connections including the one from 131.107.100.50 to fail. Adding the allow rule restores healthy probe status and traffic delivery, so this solution meets the goal."
  },
  {
    "id": "az104-5-139",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have an Azure virtual network named VNet1 that contains the following settings:\n- IPv4 address space: 172.16.10.0/24\n- Subnet name: Subnet1\n- Subnet address range: 172.16.10.0/25\nWhat is the maximum number of virtual machines that can connect to Subnet1?",
    "choices": [
      {
        "id": "a",
        "text": "24"
      },
      {
        "id": "b",
        "text": "25"
      },
      {
        "id": "c",
        "text": "123"
      },
      {
        "id": "d",
        "text": "128"
      },
      {
        "id": "e",
        "text": "251"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "A /25 subnet has 128 total addresses. Azure reserves 5 addresses per subnet (the network address, default gateway, two DNS addresses, and the broadcast address), leaving 123 usable addresses for VM NICs."
  },
  {
    "id": "az104-5-140",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure subscription that contains a resource group named RG1 and a virtual network named VNet1. You plan to create an Azure container instance named container1. You need to be able to configure DNS name label scope reuse for container1. What should you configure for container1?",
    "choices": [
      {
        "id": "a",
        "text": "the private networking type"
      },
      {
        "id": "b",
        "text": "the public networking type"
      },
      {
        "id": "c",
        "text": "a new subnet on VNet1"
      },
      {
        "id": "d",
        "text": "a confidential SKU"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "DNS name label scope reuse is a property of the public IP assigned to a container instance, so it is only exposed when container1 uses the Public networking type; containers deployed with private (VNet) networking do not get a public DNS label."
  },
  {
    "id": "az104-5-143",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure subscription. You are creating a new Azure container instance that will have the following settings:\n- Container name: cont1\n- SKU: Standard\n- OS type: Windows\n- Networking type: Public\n- Memory (GiB): 2.5\n- Number of CPU cores: 2\nYou discover that the Private setting for Networking type is unavailable. You need to ensure that cont1 can be configured to use private networking. Which setting should you change?",
    "choices": [
      {
        "id": "a",
        "text": "Memory (GiB)"
      },
      {
        "id": "b",
        "text": "Networking type"
      },
      {
        "id": "c",
        "text": "Number of CPU cores"
      },
      {
        "id": "d",
        "text": "OS type"
      },
      {
        "id": "e",
        "text": "SKU"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Azure Container Instances only supports deploying a container group into a virtual network (private networking) for Linux containers — Windows containers can't use it at all, which is why Private is greyed out. Changing OS type to Linux is what actually unlocks the Private networking option; Networking type itself is the disabled setting, not something you can change to fix this."
  },
  {
    "id": "az104-5-146",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription. You plan to migrate 50 virtual machines from VMware vSphere to the subscription. You create a Recovery Services vault. What should you do next?",
    "choices": [
      {
        "id": "a",
        "text": "Configure an extended network."
      },
      {
        "id": "b",
        "text": "Create a recovery plan."
      },
      {
        "id": "c",
        "text": "Deploy an Open Virtualization Application (OVA) template to vSphere."
      },
      {
        "id": "d",
        "text": "Configure a virtual network."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "After creating the Recovery Services vault, the next step in the migration wizard's Prepare infrastructure phase is to specify the target region, resource group, and virtual network the migrated VMs will use, before deploying the configuration server (OVA) into the vSphere environment."
  },
  {
    "id": "az104-5-149",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have an Azure subscription that contains two peered virtual networks named VNet1 and VNet2. VNet1 has a VPN gateway that uses static routing. The on-premises network has a VPN connection that uses the VPN gateway of VNet1. You need to configure access for users on the on-premises network to connect to a virtual machine on VNet2. The solution must minimize costs. Which type of connectivity should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Firewall with a private IP address"
      },
      {
        "id": "b",
        "text": "service chaining and user-defined routes (UDRs)"
      },
      {
        "id": "c",
        "text": "Azure Application Gateway"
      },
      {
        "id": "d",
        "text": "ExpressRoute circuits to VNet2"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Because VPNGW1 uses static (non-BGP) routing, gateway transit through the peering to VNet2 is not available. Using service chaining with user-defined routes lets traffic entering through VNet1's gateway reach VNet2 without deploying a second gateway or an ExpressRoute circuit, which keeps costs down."
  },
  {
    "id": "az104-5-150",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have an Azure subscription that contains two peered virtual networks named VNet1 and VNet2. You have a Network Virtual Appliance (NVA) named NetVA1. You need to ensure that the traffic from VNet1 to VNet2 is inspected by using NetVA1. What should you use?",
    "choices": [
      {
        "id": "a",
        "text": "a local network gateway"
      },
      {
        "id": "b",
        "text": "a route table that has custom routes"
      },
      {
        "id": "c",
        "text": "a service endpoint"
      },
      {
        "id": "d",
        "text": "IP address reservations"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "A route table with a user-defined route that sends traffic destined for VNet2's address prefix to NetVA1's private IP as the next hop forces that traffic through the NVA for inspection instead of taking the default peering path."
  },
  {
    "id": "az104-6-2",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription that contains a virtual machine named VM1. You plan to deploy an Azure Monitor alert rule that will trigger an alert when CPU usage on VM1 exceeds 80 percent. You need to ensure that the alert rule sends an email message to two users named User1 and User2. What should you create for Azure Monitor?",
    "choices": [
      {
        "id": "a",
        "text": "an action group"
      },
      {
        "id": "b",
        "text": "a mail-enabled security group"
      },
      {
        "id": "c",
        "text": "a distribution group"
      },
      {
        "id": "d",
        "text": "a Microsoft 365 group"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "An action group defines the notification actions an alert rule executes when it fires, including emailing specified addresses; attaching an action group configured with User1's and User2's emails to the CPU alert rule fulfills the requirement."
  },
  {
    "id": "az104-6-8",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure virtual machine named VM1. You use Azure Backup to create a backup of VM1 named Backup1. After creating Backup1, you perform the following changes to VM1:\n- Modify the size of VM1.\n- Copy a file named Budget.xls to a folder named Data.\n- Reset the password for the built-in administrator account.\n- Add a data disk to VM1.\nAn administrator uses the Replace existing option to restore VM1 from Backup1. You need to ensure that all the changes to VM1 are restored. Which change should you perform again?",
    "choices": [
      {
        "id": "a",
        "text": "Modify the size of VM1."
      },
      {
        "id": "b",
        "text": "Reset the password for the built-in administrator account."
      },
      {
        "id": "c",
        "text": "Add a data disk."
      },
      {
        "id": "d",
        "text": "Copy Budget.xls to Data."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "The Replace existing restore option only overwrites the disks that were part of the selected recovery point with their pre-backup state; it does not touch compute-level settings like VM size, and it does not remove a data disk added after the backup since that disk was never part of the recovery point. Since Budget.xls lives on a disk rolled back to its pre-backup content, only that file copy needs to be redone."
  },
  {
    "id": "az104-6-10",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Your company has a main office in London that contains 100 client computers. Three years ago, you migrated to Azure Active Directory (Azure AD). The company's security policy states that all personal devices and corporate-owned devices must be registered or joined to Azure AD. A remote user named User1 is unable to join a personal device to Azure AD from a home network. You verify that User1 was able to join devices to Azure AD in the past. You need to ensure that User1 can join the device to Azure AD. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Assign the User administrator role to User1."
      },
      {
        "id": "b",
        "text": "From the Device settings blade, modify the Maximum number of devices per user setting."
      },
      {
        "id": "c",
        "text": "Create a point-to-site VPN from the home network of User1 to Azure."
      },
      {
        "id": "d",
        "text": "From the Device settings blade, modify the Users may join devices to Azure AD setting."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure AD enforces a default per-user device quota (20 devices). Since User1 has successfully joined devices before, the most likely cause is that they have reached this quota, so raising the Maximum number of devices per user setting allows the new join to succeed."
  },
  {
    "id": "az104-6-13",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com. User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com. You need to create new user accounts in external.contoso.onmicrosoft.com.\nSolution: You instruct User1 to create the user accounts. Does that meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Whoever creates a new Azure AD tenant is automatically assigned the Global Administrator role in that new tenant, so User1 already has the rights needed to create user accounts in external.contoso.onmicrosoft.com. The solution meets the goal."
  },
  {
    "id": "az104-6-14",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an existing Azure subscription that contains 10 virtual machines. You need to monitor the latency between your on-premises network and the virtual machines. What should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Service Map"
      },
      {
        "id": "b",
        "text": "Connection troubleshoot"
      },
      {
        "id": "c",
        "text": "Network Performance Monitor"
      },
      {
        "id": "d",
        "text": "Effective routes"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Network Performance Monitor is the Azure Monitor solution purpose-built for continuously measuring latency, packet loss, and network performance between on-premises sites and Azure resources over VPN or ExpressRoute links."
  },
  {
    "id": "az104-6-18",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure virtual machine named VM1. Azure collects events from VM1. You are creating an alert rule in Azure Monitor to notify an administrator when an error is logged in the System event log of VM1. Which target resource should you monitor in the alert rule?",
    "choices": [
      {
        "id": "a",
        "text": "virtual machine extension"
      },
      {
        "id": "b",
        "text": "virtual machine"
      },
      {
        "id": "c",
        "text": "metric alert"
      },
      {
        "id": "d",
        "text": "Azure Log Analytics workspace"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "A log search alert rule that inspects event log entries evaluates a KQL query against the workspace the events were collected into, so the target resource for the alert rule must be the Log Analytics workspace, not the VM resource itself."
  },
  {
    "id": "az104-6-19",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You have an Azure subscription that contains 100 virtual machines. You regularly create and delete virtual machines. You need to identify unattached disks that can be deleted. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "From Azure Cost Management, view Cost Analysis"
      },
      {
        "id": "b",
        "text": "From Azure Advisor, modify the Advisor configuration"
      },
      {
        "id": "c",
        "text": "From Microsoft Azure Storage Explorer, view the Account Management properties"
      },
      {
        "id": "d",
        "text": "From Azure Cost Management, view Advisor Recommendations"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Azure Advisor generates cost recommendations, including flagging unattached managed disks that are still being billed, and these recommendations are surfaced through the Advisor Recommendations view inside Azure Cost Management."
  },
  {
    "id": "az104-6-20",
    "type": "single",
    "topic": "Compute",
    "prompt": "You have an Azure web app named webapp1. Users report that they often experience HTTP 500 errors when they connect to webapp1. You need to provide the developers of webapp1 with real-time access to the connection errors. The solution must provide all the connection error details. What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "From webapp1, enable Web server logging"
      },
      {
        "id": "b",
        "text": "From Azure Monitor, create a workbook"
      },
      {
        "id": "c",
        "text": "From Azure Monitor, create a Service Health alert"
      },
      {
        "id": "d",
        "text": "From webapp1, turn on Application Logging"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Application Logging streams detailed application-level error and exception information in near real time to a log stream developers can tail live, whereas Web server logging only records HTTP access-log style entries without application error details."
  },
  {
    "id": "az104-6-21",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure web app named App1. You need to monitor the availability of App1 by using a multi-step web test. What should you use in Azure Monitor?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Service Health"
      },
      {
        "id": "b",
        "text": "Azure Application Insights"
      },
      {
        "id": "c",
        "text": "the Diagnostic settings"
      },
      {
        "id": "d",
        "text": "metrics"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Multi-step web tests (recorded, multi-request browser interactions) are an Application Insights Availability test feature within Azure Monitor."
  },
  {
    "id": "az104-6-23",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have a Recovery Services vault named RSV1. RSV1 has a backup policy that retains instant snapshots for five days and daily backup for 14 days. RSV1 performs daily backups of VM1. VM1 hosts a static website that was updated eight days ago. You need to recover VM1 to a point eight days ago. The solution must minimize downtime. What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "Deallocate VM1."
      },
      {
        "id": "b",
        "text": "Restore VM1 by using the Replace existing restore configuration option."
      },
      {
        "id": "c",
        "text": "Delete VM1."
      },
      {
        "id": "d",
        "text": "Restore VM1 by using the Create new restore configuration option."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Restoring to a new VM (Create new) restores the 8-day-old recovery point onto a separate virtual machine while the current VM1 keeps running and serving traffic, minimizing downtime; Replace existing would take VM1 offline immediately during the restore."
  },
  {
    "id": "az104-6-28",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have an Azure subscription named Subscription1 that contains two Azure virtual networks named VNet1 and VNet2. VNet1 contains a VPN gateway named VPNGW1 that uses static routing. There is a site-to-site VPN connection between your on-premises network and VNet1. On a computer named Client1 that runs Windows 10, you configure a point-to-site VPN connection to VNet1. You configure virtual network peering between VNet1 and VNet2. You verify that you can connect to VNet2 from the on-premises network. Client1 is unable to connect to VNet2. You need to ensure that you can connect Client1 to VNet2. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Select Use the remote virtual network's gateway or Route Server on VNet1 to VNet2 peering."
      },
      {
        "id": "b",
        "text": "Select Use the remote virtual network's gateway or Route Server on VNet2 to VNet1 peering."
      },
      {
        "id": "c",
        "text": "Download and re-install the VPN client configuration package on Client1."
      },
      {
        "id": "d",
        "text": "Enable BGP on VPNGW1."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "A point-to-site VPN client only routes to the address spaces that were included in its VPN client configuration package at the time it was generated. Since VNet2 was peered after Client1's package was created, Client1 needs an updated client configuration package downloaded and reinstalled to pick up routes to VNet2."
  },
  {
    "id": "az104-6-30",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure Active Directory (Azure AD) tenant that is linked to 10 Azure subscriptions. You need to centrally monitor user activity across all the subscriptions. What should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Application Insights Profiler"
      },
      {
        "id": "b",
        "text": "access reviews"
      },
      {
        "id": "c",
        "text": "Activity log filters"
      },
      {
        "id": "d",
        "text": "a Log Analytics workspace"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Routing activity and sign-in log data from all 10 subscriptions into a single Log Analytics workspace lets you run centralized KQL queries against user activity across the entire tenant, which Activity log filters alone (scoped per subscription) cannot do."
  },
  {
    "id": "az104-6-32",
    "type": "single",
    "topic": "Networking",
    "prompt": "You have a subnet named Subnet1 that contains Azure virtual machines. A network security group (NSG) named NSG1 is associated to Subnet1. NSG1 only contains the default rules. You need to create a rule in NSG1 to prevent the hosts on Subnet1 from connecting to the Azure portal. The hosts must be able to connect to other internet hosts. To what should you set Destination in the rule?",
    "choices": [
      {
        "id": "a",
        "text": "Application security group"
      },
      {
        "id": "b",
        "text": "IP Addresses"
      },
      {
        "id": "c",
        "text": "Service Tag"
      },
      {
        "id": "d",
        "text": "Any"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Setting Destination to a Service Tag targets Microsoft's Azure portal/management endpoints by name rather than by hard-to-maintain IP ranges, letting you deny just that traffic with a higher-priority rule while general internet access remains allowed."
  },
  {
    "id": "az104-6-33",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1. You need to view the error events from a table named Event. Which query should you run in Workspace1?",
    "choices": [
      {
        "id": "a",
        "text": "search in (Event) \"error\""
      },
      {
        "id": "b",
        "text": "Event | where EventType is \"error\""
      },
      {
        "id": "c",
        "text": "select * from Event where EventType == \"error\""
      },
      {
        "id": "d",
        "text": "Get-Event Event | where {$_.EventType == \"error\"}"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Kusto Query Language (KQL), used by Log Analytics, supports full-text search across a table's columns using `search in (TableName) \"term\"`; the other options use invalid KQL syntax (SQL SELECT statements and PowerShell cmdlets are not valid Log Analytics queries)."
  },
  {
    "id": "az104-6-34",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure App Service web app named App1. You need to collect performance traces for App1. What should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Application Insights Profiler"
      },
      {
        "id": "b",
        "text": "the Activity log"
      },
      {
        "id": "c",
        "text": "the Deployment center"
      },
      {
        "id": "d",
        "text": "the Diagnose and solve problems settings"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Application Insights Profiler captures detailed, code-level performance traces for App Service applications, showing where request processing time is being spent."
  },
  {
    "id": "az104-6-37",
    "type": "multi",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription that contains multiple virtual machines in the West US Azure region. You need to use Traffic Analytics in Azure Network Watcher to monitor virtual machine traffic. Which two resources should you create? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "a Log Analytics workspace"
      },
      {
        "id": "b",
        "text": "an Azure Monitor workbook"
      },
      {
        "id": "c",
        "text": "a storage account"
      },
      {
        "id": "d",
        "text": "a Microsoft Sentinel workspace"
      },
      {
        "id": "e",
        "text": "a Data Collection Rule (DCR) in Azure Monitor"
      }
    ],
    "correctChoiceIds": [
      "a",
      "c"
    ],
    "explanation": "Traffic Analytics requires NSG flow logs (v2), which store the raw flow data in a storage account, while the processed, queryable traffic analytics output is written to a Log Analytics workspace. Both must exist before Traffic Analytics can be enabled."
  },
  {
    "id": "az104-6-39",
    "type": "single",
    "topic": "Compute",
    "prompt": "You need to configure an Azure web app named contoso.azurewebsites.net to host www.contoso.com. What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "Create A records named www.contoso.com and asuid.contoso.com."
      },
      {
        "id": "b",
        "text": "Create a TXT record named asuid that contains the domain verification ID."
      },
      {
        "id": "c",
        "text": "Create a CNAME record named asuid that contains the domain verification ID."
      },
      {
        "id": "d",
        "text": "Create a TXT record named www.contoso.com that has a value of contoso.azurewebsites.net."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Before Azure App Service will accept a custom domain mapping, it requires domain ownership verification, done by creating a TXT record named asuid (or asuid.<subdomain>) containing the app's custom domain verification ID. Only after verification succeeds can the actual mapping record (CNAME or A record) be added."
  },
  {
    "id": "az104-6-40",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription that contains 10 network security groups (NSGs), 10 virtual machines, and a Log Analytics workspace named Workspace1. Each NSG is connected to a virtual machine. You need to configure an Azure Monitor Network Insights alert that will be triggered when suspicious network traffic is detected. What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "Deploy Connection Monitor."
      },
      {
        "id": "b",
        "text": "Configure data collection endpoints."
      },
      {
        "id": "c",
        "text": "Configure a private link."
      },
      {
        "id": "d",
        "text": "Configure NSG flow logs."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Network Insights alerts that detect suspicious traffic patterns rely on Traffic Analytics data, which is derived from NSG flow logs. Flow logging must be enabled on the NSGs first so that traffic data exists for the alert rule to evaluate."
  },
  {
    "id": "az104-6-42",
    "type": "single",
    "topic": "Storage",
    "prompt": "You have an Azure subscription that contains a storage account named storage1 in the North Europe Azure region. You need to ensure that when blob data is added to storage1, a secondary copy is created in the East US region. The solution must minimize administrative effort. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "operational backup"
      },
      {
        "id": "b",
        "text": "object replication"
      },
      {
        "id": "c",
        "text": "geo-redundant storage (GRS)"
      },
      {
        "id": "d",
        "text": "a lifecycle management rule"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Object replication asynchronously copies new or changed block blobs to a storage account in a destination region of your choosing, such as East US. GRS instead replicates only to Microsoft's fixed paired region for North Europe (West Europe), which cannot be set to East US."
  },
  {
    "id": "az104-6-43",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription that contains two Log Analytics workspaces named Workspace1 and Workspace2 and 100 virtual machines that run Windows Server. You need to collect performance data and events from the virtual machines. The solution must meet the following requirements:\n- Logs must be sent to Workspace1 and Workspace2.\n- All Windows events must be captured.\n- All security events must be captured.\nWhat should you install and configure on each virtual machine?",
    "choices": [
      {
        "id": "a",
        "text": "the Azure Monitor agent"
      },
      {
        "id": "b",
        "text": "the Windows Azure diagnostics extension (WAD)"
      },
      {
        "id": "c",
        "text": "the Windows VM agent"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The Azure Monitor Agent supports multi-homing, allowing the same machine's data to be sent to multiple Log Analytics workspaces via multiple Data Collection Rules, while also supporting full Windows event and security event collection; the legacy WAD extension does not support this multi-workspace requirement."
  },
  {
    "id": "az104-6-44",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription that contains a virtual machine named VM1 and an Azure function named App1. You need to create an alert rule that will run App1 if VM1 stops. What should you create for the alert rule?",
    "choices": [
      {
        "id": "a",
        "text": "an application security group"
      },
      {
        "id": "b",
        "text": "a security group that has dynamic device membership"
      },
      {
        "id": "c",
        "text": "an action group"
      },
      {
        "id": "d",
        "text": "an application group"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "An action group defines the actions Azure Monitor takes when an alert fires, including calling an Azure Function; you attach an action group configured to invoke App1 to the alert rule that monitors VM1's stopped/deallocated state."
  },
  {
    "id": "az104-6-45",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription that contains a virtual network named VNet1. VNet1 uses two ExpressRoute circuits that connect to two separate on-premises datacenters. You need to create a dashboard to display detailed metrics and a visual representation of the network topology. What should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Monitor Network Insights"
      },
      {
        "id": "b",
        "text": "a Data Collection Rule (DCR)"
      },
      {
        "id": "c",
        "text": "Azure Virtual Network Watcher"
      },
      {
        "id": "d",
        "text": "Log Analytics"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Azure Monitor Network Insights provides a built-in, prebuilt dashboard with detailed metrics and a topology diagram for network resources, including ExpressRoute circuits and connected virtual networks."
  },
  {
    "id": "az104-6-46",
    "type": "multi",
    "topic": "Monitor & Backup",
    "prompt": "You deploy Azure virtual machines to three Azure regions. Each region contains a virtual network. Each virtual network contains multiple subnets peered in a full mesh topology. Each subnet contains a network security group (NSG) that has defined rules. A user reports that he cannot use port 33000 to connect from a virtual machine in one region to a virtual machine in another region. Which two options can you use to diagnose the issue? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "Azure Virtual Network Manager"
      },
      {
        "id": "b",
        "text": "IP flow verify"
      },
      {
        "id": "c",
        "text": "Azure Monitor Network Insights"
      },
      {
        "id": "d",
        "text": "Connection troubleshoot"
      },
      {
        "id": "e",
        "text": "elective security rules"
      }
    ],
    "correctChoiceIds": [
      "b",
      "d"
    ],
    "explanation": "IP flow verify checks whether a specific source/destination/port/protocol combination is allowed or denied by the effective NSG rules on a VM's NIC, while Connection troubleshoot runs an actual end-to-end connectivity test and reports exactly where in the path (NSG, routing, etc.) the traffic is being dropped; both are Network Watcher tools suited to diagnosing this port-level failure."
  },
  {
    "id": "az104-6-47",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription. You need to receive an email alert when a resource lock is removed from any resource in the subscription. What should you use to create an activity log alert in Azure Monitor?",
    "choices": [
      {
        "id": "a",
        "text": "a resource, a condition, and an action group"
      },
      {
        "id": "b",
        "text": "a resource, a condition, and a Microsoft 365 group"
      },
      {
        "id": "c",
        "text": "a Log Analytics workspace, a resource, and an action group"
      },
      {
        "id": "d",
        "text": "a data collection endpoint, an application security group, and a resource group"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "An activity log alert rule needs a scope/resource to monitor, a condition matching the specific operation (such as deleting a resource lock), and an action group that defines how to notify administrators by email."
  },
  {
    "id": "az104-6-51",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription. The subscription contains virtual machines that connect to a virtual network named VNet1. You plan to configure Azure Monitor for VM Insights. You need to ensure that all the virtual machines only communicate with Azure Monitor through VNet1. What should you create first?",
    "choices": [
      {
        "id": "a",
        "text": "a data collection rule (DCR)"
      },
      {
        "id": "b",
        "text": "a Log Analytics workspace"
      },
      {
        "id": "c",
        "text": "an Azure Monitor Private Link Scope (AMPLS)"
      },
      {
        "id": "d",
        "text": "a private endpoint"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "An Azure Monitor Private Link Scope (AMPLS) resource is what associates the Log Analytics workspace(s) used by VM Insights with private connectivity; it must be created first, then linked to a private endpoint on VNet1 so all monitoring traffic stays on the private network."
  },
  {
    "id": "az104-6-53",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription that contains an Azure Stream Analytics job named Job1. You need to monitor input events for Job1 to identify the number of events that were NOT processed. Which metric should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Out-of-Order Events"
      },
      {
        "id": "b",
        "text": "Output Events"
      },
      {
        "id": "c",
        "text": "Late Input Events"
      },
      {
        "id": "d",
        "text": "Backlogged Input Events"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "The Backlogged Input Events metric reports the number of input events still waiting in queue that the Stream Analytics job has not yet processed, directly identifying unprocessed events."
  },
  {
    "id": "az104-6-54",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription that contains an Azure SQL database named DB1. You plan to use Azure Monitor to monitor the performance of DB1. You must be able to run queries to analyze log data. Which destination should you configure in the Diagnostic settings of DB1?",
    "choices": [
      {
        "id": "a",
        "text": "Send to a Log Analytics workspace."
      },
      {
        "id": "b",
        "text": "Archive to a storage account."
      },
      {
        "id": "c",
        "text": "Stream to an Azure event hub."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Only a Log Analytics workspace destination lets you run KQL queries against the collected diagnostic data; archiving to a storage account or streaming to an event hub do not provide native query analysis capability."
  },
  {
    "id": "az104-6-55",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription. The subscription contains virtual machines that run Windows Server. You have a data collection rule (DCR) named Rule1. You plan to use the Azure Monitor Agent to collect events from Windows System event logs. You only need to collect system events that have an ID of 1001. Which type of query should you use for the data source in Rule1?",
    "choices": [
      {
        "id": "a",
        "text": "SQL"
      },
      {
        "id": "b",
        "text": "XPath"
      },
      {
        "id": "c",
        "text": "KQL"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Windows Event Log data sources in an Azure Monitor Agent DCR are filtered using XPath queries (for example, targeting a specific Event ID); KQL is used to query data after it has been ingested into Log Analytics, not to define the AMA collection filter."
  },
  {
    "id": "az104-6-56",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription that contains a virtual machine named VM1. You have an on-premises datacenter that contains a domain controller named DC1. ExpressRoute is used to connect the on-premises datacenter to Azure. You need to use Connection Monitor to identify network latency between VM1 and DC1. What should you install on DC1?",
    "choices": [
      {
        "id": "a",
        "text": "the Azure Connected Machine agent for Azure Arc-enabled servers"
      },
      {
        "id": "b",
        "text": "the Azure Network Watcher Agent virtual machine extension"
      },
      {
        "id": "c",
        "text": "the Log Analytics agent"
      },
      {
        "id": "d",
        "text": "an Azure Monitor agent extension"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "To include a non-Azure machine like DC1 as a Connection Monitor endpoint, you install the Azure Monitor agent on it; VM extensions such as the Network Watcher Agent extension only apply to Azure VMs, and the legacy Log Analytics agent is being retired in favor of AMA for this scenario."
  },
  {
    "id": "az104-6-57",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription that has Traffic Analytics configured. You deploy a new virtual machine named VM1 that has the following settings:\n- Region: East US\n- Virtual network: VNet1\n- NIC network security group: NSG1\nYou need to monitor VM1 traffic by using Traffic Analytics. Which settings should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Diagnostic settings for VM1"
      },
      {
        "id": "b",
        "text": "NSG flow logs for NSG1"
      },
      {
        "id": "c",
        "text": "Diagnostic settings for NSG1"
      },
      {
        "id": "d",
        "text": "Insights for VM1"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Traffic Analytics is built on top of NSG flow logs (v2); to analyze VM1's traffic you enable flow logging (with Traffic Analytics turned on) for NSG1, the NSG bound to VM1's network interface."
  },
  {
    "id": "az104-6-58",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You have an Azure subscription. The subscription contains 10 virtual machines that run Windows Server. Each virtual machine hosts a website in IIS and has the Azure Monitor Agent installed. You need to collect the IIS logs from each virtual machine and store them in a Log Analytics workspace. What should you configure first?",
    "choices": [
      {
        "id": "a",
        "text": "a data collection endpoint"
      },
      {
        "id": "b",
        "text": "an Azure Monitor Private Link Scope (AMPLS)"
      },
      {
        "id": "c",
        "text": "Diagnostic settings"
      },
      {
        "id": "d",
        "text": "VM insights"
      },
      {
        "id": "e",
        "text": "a private endpoint"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Collecting IIS logs as custom text logs through the Azure Monitor Agent requires a Data Collection Endpoint to be configured and associated before the custom log data source in the Data Collection Rule can be defined and start ingesting data."
  },
  {
    "id": "az104-7-2",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You need to meet the user requirement for Admin1. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "From the Azure Active Directory blade, modify the Groups"
      },
      {
        "id": "b",
        "text": "From the Azure Active Directory blade, modify the Properties"
      },
      {
        "id": "c",
        "text": "From the Subscriptions blade, select the subscription, and then modify the Access control (IAM) settings"
      },
      {
        "id": "d",
        "text": "From the Subscriptions blade, select the subscription, and then modify the Properties"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Granting or changing a user's Azure RBAC role at the subscription scope is done from the subscription's Access control (IAM) blade, which is the standard place to assign administrative permissions such as those required for Admin1."
  },
  {
    "id": "az104-9-2",
    "type": "single",
    "topic": "Storage",
    "prompt": "You need to ensure that you can grant Group4 Azure RBAC read only permissions to all the Azure file shares. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "On storage2, enable identity-based access for the file shares."
      },
      {
        "id": "b",
        "text": "Recreate storage2 and set Hierarchical namespace to Enabled."
      },
      {
        "id": "c",
        "text": "On storage1 and storage4, change the Account kind type to StorageV2 (general purpose v2)."
      },
      {
        "id": "d",
        "text": "Create a shared access signature (SAS) for storage1, storage2, and storage4."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Azure RBAC data-plane roles for Azure Files (such as Storage File Data SMB Share Reader) only take effect once identity-based access (Azure AD DS or Azure AD Kerberos authentication) is enabled on the storage account; without it, file share access relies solely on storage account keys and cannot be governed by RBAC group assignments."
  },
  {
    "id": "az104-10-1",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You need to implement a backup solution for App1 after the application is moved. What should you create first?",
    "choices": [
      {
        "id": "a",
        "text": "a recovery plan"
      },
      {
        "id": "b",
        "text": "an Azure Backup Server"
      },
      {
        "id": "c",
        "text": "a backup policy"
      },
      {
        "id": "d",
        "text": "a Recovery Services vault"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Every Azure Backup deployment starts with a Recovery Services vault, the container that stores recovery points and backup policies; the backup policy itself is defined afterward, inside the vault."
  },
  {
    "id": "az104-10-2",
    "type": "single",
    "topic": "Storage",
    "prompt": "You need to move the blueprint files to Azure. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Generate an access key. Map a drive, and then copy the files by using File Explorer."
      },
      {
        "id": "b",
        "text": "Use Azure Storage Explorer to copy the files."
      },
      {
        "id": "c",
        "text": "Use the Azure Import/Export service."
      },
      {
        "id": "d",
        "text": "Generate a shared access signature (SAS). Map a drive, and then copy the files by using File Explorer."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure Storage Explorer provides a simple, low-effort GUI to connect directly to a storage account and copy files into it, avoiding the extra steps of generating keys or SAS tokens to map a drive, and it is far simpler than the disk-shipping Import/Export service, which is intended for very large datasets."
  },
  {
    "id": "az104-11-3",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You need to identify which storage account to use for the flow logging of IP traffic from VM5. The solution must meet the retention requirements. Which storage account should you identify?",
    "choices": [
      {
        "id": "a",
        "text": "storage1"
      },
      {
        "id": "b",
        "text": "storage2"
      },
      {
        "id": "c",
        "text": "storage3"
      },
      {
        "id": "d",
        "text": "storage4"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "NSG flow logs write their raw flow data to a storage account, and the account used must have a data retention setting long enough to satisfy the stated retention requirement, which points to storage2 as the account configured to meet it."
  },
  {
    "id": "az104-12-1",
    "type": "single",
    "topic": "Monitor & Backup",
    "prompt": "You discover that VM3 does NOT meet the technical requirements. You need to verify whether the issue relates to the NSGs. What should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Diagram in VNet1"
      },
      {
        "id": "b",
        "text": "Diagnostic settings in Azure Monitor"
      },
      {
        "id": "c",
        "text": "Diagnose and solve problems in Traffic Manager profiles"
      },
      {
        "id": "d",
        "text": "The security recommendations in Azure Advisor"
      },
      {
        "id": "e",
        "text": "IP flow verify in Azure Network Watcher"
      }
    ],
    "correctChoiceIds": [
      "e"
    ],
    "explanation": "IP flow verify in Azure Network Watcher tests a specific source/destination/port/protocol combination against the effective NSG rules applied to a VM's NIC, directly confirming whether an NSG rule is allowing or denying the traffic in question."
  },
  {
    "id": "az104-13-1",
    "type": "single",
    "topic": "Networking",
    "prompt": "You need to ensure that VM1 can communicate with VM4. The solution must minimize the administrative effort. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Create an NSG and associate the NSG to VM1 and VM4."
      },
      {
        "id": "b",
        "text": "Establish peering between VNET1 and VNET3."
      },
      {
        "id": "c",
        "text": "Assign VM4 an IP address of 10.0.1.5/24."
      },
      {
        "id": "d",
        "text": "Create a user-defined route from VNET1 to VNET3."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Since VM1 and VM4 sit in different virtual networks (VNET1 and VNET3), establishing VNet peering between the two networks is the lowest-effort way to enable direct communication, as peered VNets automatically route traffic to each other without gateways, NVAs, or per-VM NSG changes."
  },
  {
    "id": "az104-14-2",
    "type": "single",
    "topic": "Networking",
    "prompt": "You are planning the move of App1 to Azure. You create a network security group (NSG). You need to recommend a solution to provide users with access to App1. What should you recommend?",
    "choices": [
      {
        "id": "a",
        "text": "Create an incoming security rule for port 443 from the Internet. Associate the NSG to the subnet that contains the web servers."
      },
      {
        "id": "b",
        "text": "Create an outgoing security rule for port 443 from the Internet. Associate the NSG to the subnet that contains the web servers."
      },
      {
        "id": "c",
        "text": "Create an incoming security rule for port 443 from the Internet. Associate the NSG to all the subnets."
      },
      {
        "id": "d",
        "text": "Create an outgoing security rule for port 443 from the Internet. Associate the NSG to all the subnets."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "External users reaching a web application need an inbound (not outgoing) allow rule for HTTPS (port 443); associating the NSG only with the subnet hosting the web servers, rather than every subnet, follows least-privilege practice and minimizes exposure."
  },
  {
    "id": "az104-15-2",
    "type": "single",
    "topic": "Networking",
    "prompt": "You need to add VM1 and VM2 to the backend pool of LB1. What should you do first?",
    "choices": [
      {
        "id": "a",
        "text": "Connect VM2 to VNET1/Subnet1."
      },
      {
        "id": "b",
        "text": "Redeploy VM1 and VM2 to the same availability zone."
      },
      {
        "id": "c",
        "text": "Redeploy VM1 and VM2 to the same availability set."
      },
      {
        "id": "d",
        "text": "Create a new NSG and associate the NSG to VNET1/Subnet1."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "A Basic SKU Azure Load Balancer requires all VMs in its backend pool to belong to the same availability set (or the same virtual machine scale set); VM1 and VM2 must first be redeployed into a shared availability set before they can be added together to LB1's backend pool."
  },
  {
    "id": "az104-15-3",
    "type": "single",
    "topic": "Networking",
    "prompt": "You need to ensure that VM1 can communicate with VM4. The solution must minimize administrative effort. What should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Create a user-defined route from VNET1 to VNET3."
      },
      {
        "id": "b",
        "text": "Create an NSG and associate the NSG to VM1 and VM4."
      },
      {
        "id": "c",
        "text": "Assign VM4 an IP address of 10.0.1.5/24."
      },
      {
        "id": "d",
        "text": "Establish peering between VNET1 and VNET3."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "With VM1 and VM4 in separate virtual networks, peering VNET1 and VNET3 is the simplest, lowest-effort way to allow direct communication between them without deploying gateways, NVAs, or manual routes."
  },
  {
    "id": "az104-16-2",
    "type": "single",
    "topic": "Identity & Governance",
    "prompt": "You need to recommend a solution to automate the configuration for the finance department users. The solution must meet the technical requirements. What should you include in the recommendation?",
    "choices": [
      {
        "id": "a",
        "text": "Azure AD B2C"
      },
      {
        "id": "b",
        "text": "dynamic groups and conditional access policies"
      },
      {
        "id": "c",
        "text": "Azure AD Identity Protection"
      },
      {
        "id": "d",
        "text": "an Azure logic app and the Microsoft Identity Management (MIM) client"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Dynamic groups automatically add or remove finance department users based on their attributes, and conditional access policies scoped to that dynamic group enforce access controls automatically as membership changes, meeting the automation requirement without manual administrative work."
  }
] as Exam["questions"],
};
