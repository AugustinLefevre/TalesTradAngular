import { Component, Inject, PLATFORM_ID, OnInit, OnDestroy, Input } from '@angular/core';
import { Editor, Toolbar } from "ngx-editor";
import { isPlatformBrowser } from '@angular/common';
import { StoryService } from '../../services/story-service/story.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-text-proposal',
  templateUrl: './new-text-proposal.component.html',
  styleUrls: ['./new-text-proposal.component.css']
})
export class NewTextProposalComponent implements OnInit, OnDestroy {
  editor: Editor  | null = null;
  toolbar: Toolbar = [
    [{ heading: ["h1", "h2"] }],
    ["bold", "italic"],
    ["ordered_list", "bullet_list"],
    ['indent', 'outdent']
  ];
  html = '';

  constructor(@Inject(PLATFORM_ID) private platformId: object,
              @Inject(StoryService) private storyService: StoryService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.editor = new Editor();
    }
  }

  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
    }
  }

  onSubmit(): void {
    var storyId = this.route.snapshot.paramMap.get('id');
    if(storyId != null)
      this.storyService.createTextProposal(storyId, 0, this.html).subscribe(
        response => {
          console.log('Réponse du serveur:', response);
        },
        error => {
          console.error('Erreur lors de l\'envoi de la proposition:', error);
        }
      );
  }
}
