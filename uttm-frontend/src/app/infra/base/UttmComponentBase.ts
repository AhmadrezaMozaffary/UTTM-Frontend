import { UserAgentType } from '../models/user.model';
import { UserService } from '../../services/user.service';

export default class UttmComponentBase {
  private currentAgent: UserAgentType;

  constructor(private userService: UserService) {
    this.currentAgent = userService.getDevice();
  }

  protected get isDesktop(): boolean {
    return this.currentAgent == UserAgentType.Desktop;
  }
}
