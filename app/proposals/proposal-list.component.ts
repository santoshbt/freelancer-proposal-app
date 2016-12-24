import {Component} from '@angular/core'
import {Proposal} from './proposal'

@Component({
    moduleId:module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent{
    proposalOne:Proposal = new Proposal(
        15, 'abc customer', 'http://santoshbt.com', 'Ruby on Rails',
        150, 120, 15, "santosh@gmail.com"
    )
    proposalTwo:Proposal = new Proposal(
        16, 'xyz customer', 'http://santoshbt.com', 'Ruby on Rails',
        150, 120, 15, "santosh@gmail.com"
    )
    proposalThree:Proposal = new Proposal(
        17, 'some customer', 'http://santoshbt.com', 'Ruby on Rails',
        150, 120, 15, "santosh@gmail.com"
    )

    proposals : Proposal[] = [this.proposalOne, 
                              this.proposalTwo, 
                              this.proposalThree
                            ]
}